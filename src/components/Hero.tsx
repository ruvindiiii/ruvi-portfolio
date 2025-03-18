import React from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "./ui/shimmer-button";

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-full relative z-10 container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/10"
          >
            <img
              src="/profile-photo.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-[3.2rem] font-bold text-white mb-10 mt-10"
          >
            👋🏼 Hi! I'm Ruvi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl/10 md:text-2xl/10 text-white mb-12"
          >
            I'm a <span className="font-bold">Frontend Developer</span> who
            loves building clean, user-friendly web experiences. I specialize in
            React and TypeScript, focusing on creating intuitive interfaces that
            make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <ShimmerButton
              background="#222"
              shimmerColor="#EEE"
              className="text-white"
              onClick={() => {
                window.location.href = "#projects";
              }}
            >
              View Projects
            </ShimmerButton>
            <a
              href="https://github.com/ruvindiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300 flex items-center h-[42px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mt-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
