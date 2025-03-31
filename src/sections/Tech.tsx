import { TechCard, TechCardProps } from "@/components/TechCard";

export default function Tech() {
  const frontendTechs: TechCardProps[] = [
    {
      title: "React",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Next.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Vue",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      title: "Tailwind CSS",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      title: "TypeScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "Sass",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
  ];

  const backendTechs: TechCardProps[] = [
    {
      title: "Node.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Express.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      invert: true,
    },
    {
      title: "MongoDB",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      title: "MySQL",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      title: "PostgreSQL",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  const infraTechs: TechCardProps[] = [
    {
      title: "Docker",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      title: "AWS",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      title: "GCloud",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      title: "GitHub",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
    },
    {
      title: "Git",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      title: "Postman",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg",
    },
  ];

  return (
    <section id="technologies" className="section">
      <div className="container">
        <h2 className="heading text-center text-white">Technologies & Tools</h2>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {frontendTechs.map((tech) => {
                return (
                  <TechCard
                    title={tech.title}
                    imageUrl={tech.imageUrl}
                    invert={tech.invert}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {backendTechs.map((tech) => {
                return (
                  <TechCard
                    title={tech.title}
                    imageUrl={tech.imageUrl}
                    invert={tech.invert}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-10 mt-5 text-white text-center">
              Tools & Infrastructure
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {infraTechs.map((tech) => {
                return (
                  <TechCard
                    title={tech.title}
                    imageUrl={tech.imageUrl}
                    invert={tech.invert}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
