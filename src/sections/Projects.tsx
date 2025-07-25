import flexTheBoxImage from "../assets/flex-the-box.png";
import pinfinityImage from "../assets/pinfinity.png";
import findMyMovieImage from "../assets/find-my-movie.png";
import typeMasterImage from "../assets/type-master.png";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      image: typeMasterImage,
      title: "TypeMaster",
      description: `A fun and engaging tool to test and improve typing skills. TypeTest tracks words per minute, total time, accuracy, and word count in real time, giving the user instant feedback on performance. Whether practicing for speed, accuracy, or just challenging yourself, it's a simple and enjoyable way to level up your typing game.

`,
      tags: ["React", "Tailwind", "Typescript", "NextJs", "CSS", "Javascript"],
      githubUrl: "https://github.com/ruvindiiii/type-master",
      liveDemoUrl: "https://www.typetest.top/",
    },
    {
      image: flexTheBoxImage,
      title: "Flex-the-Box",
      description: `A powerful development tool that simplifies CSS
              Flexbox implementation. Features a visual interface for quickly
              building and testing flex layouts, real-time code generation, and
              easy copy-paste functionality to streamline your workflow.`,
      tags: ["React", "Tailwind", "Typescript", "WebGL", "CSS", "Javascript"],
      githubUrl: "https://github.com/ruvindiiii/flex-the-box",
      liveDemoUrl: "https://flexthebox.xyz/",
    },
    {
      image: pinfinityImage,
      title: "Pinfinity",
      description: `A Pinterest-inspired image discovery platform with infinite
                    scroll and a masonry layout. Features include user
                    authentication, dynamic image search, and a responsive
                    design for seamless browsing.`,
      tags: ["React", "Tailwind", "NodeJS", "Typscript", "Pexels API"],
      githubUrl: "https://github.com/ruvindiiii/pinfinity",
      liveDemoUrl: "http://pinfinity.s3-website.eu-west-3.amazonaws.com/",
    },
    {
      image: findMyMovieImage,
      title: "Find My Movie",
      description: `A movie discovery platform that helps users find where
                    movies are streaming. Integrates with TMDB API to provide
                    comprehensive movie information, watch trailers, create
                    watchlists, and track streaming availability across multiple
                    services.`,
      tags: ["React", "Typescript", "SQL", "Tailwind", "NodeJS", "TMDB API"],
      githubUrl: "https://github.com/ruvindiiii/find-my-movie",
      liveDemoUrl: "http://findmymovieapp.s3-website.eu-west-3.amazonaws.com",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading text-center text-white mb-20" id="projects">
          Projects
        </h2>
        <div className="space-y-10">
          {projects.map((project) => {
            return (
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveDemoUrl={project.liveDemoUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
