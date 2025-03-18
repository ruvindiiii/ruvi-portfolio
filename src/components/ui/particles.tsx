import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export const Particles = ({
  className = "",
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
  ...props
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        if (width !== canvasSize.current.w || height !== canvasSize.current.h) {
          initCanvas();
        }
      }
    });

    resizeObserver.observe(canvasContainerRef.current!);
    context.current = canvasRef.current.getContext("2d");
    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    if (refresh) {
      initCanvas();
    }
  }, [refresh]);

  const initCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current)
      return;

    const container = canvasContainerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // Only update if dimensions have changed
    if (width === canvasSize.current.w && height === canvasSize.current.h) {
      return;
    }

    canvasSize.current = {
      w: width,
      h: height,
    };

    canvasRef.current.width = width * dpr;
    canvasRef.current.height = height * dpr;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;
    context.current.scale(dpr, dpr);

    // Keep existing particles if they exist, only create new ones if needed
    if (circles.current.length === 0) {
      circles.current = Array.from({ length: quantity }, (_, i) => {
        const isBright = i < quantity / 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          translateX: 0,
          translateY: 0,
          size: Math.random() * 1.8 + 1.2,
          alpha: 0,
          targetAlpha: isBright
            ? Math.random() * 0.4 + 0.3
            : Math.random() * 0.2 + 0.1,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
        };
      });
    } else {
      // Adjust existing particles to new dimensions
      circles.current.forEach((circle) => {
        if (circle.x > width) circle.x = width * Math.random();
        if (circle.y > height) circle.y = height * Math.random();
      });
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!canvasContainerRef.current) return;

    const rect = canvasContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouse.current = {
      x: x - canvasSize.current.w / 2,
      y: y - canvasSize.current.h / 2,
    };
  };

  const animate = () => {
    if (!context.current) return;

    // Clear canvas
    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    // Update and draw particles
    circles.current.forEach((circle) => {
      // Update alpha
      circle.alpha += (circle.targetAlpha - circle.alpha) / ease;

      // Move circle with velocity
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Bounce off edges
      if (circle.x < 0 || circle.x > canvasSize.current.w) circle.dx *= -1;
      if (circle.y < 0 || circle.y > canvasSize.current.h) circle.dy *= -1;

      // Mouse interaction
      circle.translateX +=
        (mouse.current.x / staticity - circle.translateX) / ease;
      circle.translateY +=
        (mouse.current.y / staticity - circle.translateY) / ease;

      // Draw
      context.current!.beginPath();
      context.current!.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
      context.current!.arc(
        circle.x + circle.translateX,
        circle.y + circle.translateY,
        circle.size,
        0,
        2 * Math.PI
      );
      context.current!.fill();
    });

    animationFrame.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={canvasContainerRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

const remap = (
  value: number,
  [low1, high1]: [number, number],
  [low2, high2]: [number, number]
) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};
