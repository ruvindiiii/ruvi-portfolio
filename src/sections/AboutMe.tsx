import { ExpertiseCard, ExpertiseProps } from "@/components/ExpertiseCard";
import {
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

export default function AboutMe() {
  const expertiseArray: ExpertiseProps[] = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern technologies.",
      icon: <CodeBracketIcon className="w-12 h-12 text-accent mb-4" />,
    },
    {
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
      icon: <CommandLineIcon className="w-12 h-12 text-accent mb-4" />,
    },
    {
      title: "DevOps",
      description: "Managing and deploying applications on cloud platforms.",
      icon: <CursorArrowRaysIcon className="w-12 h-12 text-accent mb-4" />,
    },
  ];

  return (
    <section id="about" className="section pt-4">
      <div className="container">
        <h2 className="heading text-center text-white mb-20">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseArray.map((expertise) => {
            return (
              <ExpertiseCard
                title={expertise.title}
                description={expertise.description}
                icon={expertise.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
