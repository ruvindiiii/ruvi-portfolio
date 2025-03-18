import { cn } from "@/lib/utils";
import { Particles } from "./particles";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundGradient = ({
  className,
  children,
}: BackgroundGradientProps) => {
  return (
    <div className={cn("relative w-full min-h-screen bg-[#030014]", className)}>
      <div className="absolute inset-0 w-full" style={{ minHeight: "100vh" }}>
        <Particles
          className="w-full h-full"
          quantity={180}
          staticity={50}
          ease={70}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
