import React from "react";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./components/ui/background-gradient";
import {
  ArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { ShineBorder } from "./components/ui/shine-border";
import flexTheBoxImage from "./assets/flex-the-box.png";
import pinfinityImage from "./assets/pinfinity.png";
import findMyMovieImage from "./assets/find-my-movie.png";

function App() {
  return (
    <BackgroundGradient>
      <Hero />

      {/* About Section */}
      <section id="about" className="section pt-4">
        <div className="container">
          <h2 className="heading text-center text-white mb-20">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-primary/50 relative overflow-hidden">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CodeBracketIcon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Frontend Development
              </h3>
              <p className="text-gray-300">
                Creating responsive and interactive user interfaces using modern
                technologies.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary/50 relative overflow-hidden">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CommandLineIcon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Backend Development
              </h3>
              <p className="text-gray-300">
                Building robust and scalable server-side applications and APIs.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary/50 relative overflow-hidden">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CursorArrowRaysIcon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">DevOps</h3>
              <p className="text-gray-300">
                Managing and deploying applications on cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section id="technologies" className="section">
        <div className="container">
          <h2 className="heading text-center text-white">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Frontend Development */}
            <div>
              <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    React
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Next.js
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Vue
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Tailwind
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    TypeScript
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="Sass"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Sass
                  </span>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div>
              <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Node.js
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express.js"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse invert"
                  />
                  <span className="text-white group-hover:font-medium">
                    Express.js
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    MongoDB
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    MySQL
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Tools & Infrastructure */}
            <div>
              <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
                Tools & Infrastructure
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    alt="Docker"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Docker
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                    alt="AWS"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse invert"
                  />
                  <span className="text-white group-hover:font-medium">
                    AWS
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                    alt="GCloud"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    GCloud
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse invert"
                  />
                  <span className="text-white group-hover:font-medium">
                    GitHub
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Git
                  </span>
                </div>
                <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg"
                    alt="Postman"
                    className="w-12 h-12 mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-white group-hover:font-medium">
                    Postman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="heading text-center text-white mb-20" id="projects">
            Projects
          </h2>
          <div className="space-y-10">
            {/* Project Card */}
            <div className="bg-primary/50 rounded-lg overflow-hidden transition-all duration-300 group hover:bg-primary/60 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] h-[300px]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Project Image - Left 1/3 */}
                <div className="md:w-1/3 relative p-2.5 h-full">
                  <img
                    src={flexTheBoxImage}
                    alt="Flex The Box Game Screenshot"
                    className="w-full h-full object-cover object-left group-hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                  />
                </div>

                {/* Project Details - Right 2/3 */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                      Flex-the-Box
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A powerful development tool that simplifies CSS Flexbox
                      implementation. Features a visual interface for quickly
                      building and testing flex layouts, real-time code
                      generation, and easy copy-paste functionality to
                      streamline your workflow.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        CSS
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        WebGL
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/ruvindiiii/flex-the-box"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="w-6 h-6 invert group-hover:scale-110 transition-transform"
                      />
                      <span>View Code</span>
                    </a>
                    <a
                      href="https://flexthebox.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-primary/50 rounded-lg overflow-hidden transition-all duration-300 group hover:bg-primary/60 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] h-[300px]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Project Image - Left 1/3 */}
                <div className="md:w-1/3 relative p-2.5 h-full">
                  <img
                    src={pinfinityImage}
                    alt="Pinfinity App Screenshot"
                    className="w-full h-full object-cover object-left group-hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                  />
                </div>

                {/* Project Details - Right 2/3 */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                      Pinfinity
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A Pinterest-inspired image discovery platform with
                      infinite scroll and a masonry layout. Features include
                      user authentication, dynamic image search, and a
                      responsive design for seamless browsing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Node.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Pexels API
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/ruvindiiii/pinfinity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="w-6 h-6 invert group-hover:scale-110 transition-transform"
                      />
                      <span>View Code</span>
                    </a>
                    <a
                      href="http://pinfinity.s3-website.eu-west-3.amazonaws.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card - Find My Movie */}
            <div className="bg-primary/50 rounded-lg overflow-hidden transition-all duration-300 group hover:bg-primary/60 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] h-[300px]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Project Image - Left 1/3 */}
                <div className="md:w-1/3 relative p-2.5 h-full">
                  <img
                    src={findMyMovieImage}
                    alt="Find My Movie App Screenshot"
                    className="w-full h-full object-cover object-left group-hover:scale-[1.01] transition-transform duration-300 rounded-lg"
                  />
                </div>

                {/* Project Details - Right 2/3 */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                      Find My Movie
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A movie discovery platform that helps users find where
                      movies are streaming. Integrates with TMDB API to provide
                      comprehensive movie information, watch trailers, create
                      watchlists, and track streaming availability across
                      multiple services.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        Node.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        SQL
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                        TMDB API
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/ruvindiiii/find-my-movie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        className="w-6 h-6 invert group-hover:scale-110 transition-transform"
                      />
                      <span>View Code</span>
                    </a>
                    <a
                      href="https://find-my-movie-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="heading text-center text-white">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Reach out to me for any inquiries or collaborations.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ruvindi-hulangamuwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="mailto:ruvindihulangamuwa@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Gmail"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://github.com/ruvindiiii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-10 h-10 invert"
                />
              </a>
              <a
                href="https://medium.com/@ruvindihulangamuwa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  viewBox="0 0 1043.63 592.71"
                  className="w-10 h-10 fill-white"
                >
                  <g>
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-8">
        <div className="container">
          <p className="text-center text-gray-400 text-sm">
            Made by Ruvindi Hulangamuwa © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </BackgroundGradient>
  );
}

export default App;
