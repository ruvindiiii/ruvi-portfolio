export type ProjectProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
};

export function ProjectCard(props: ProjectProps) {
  return (
    <div className="bg-primary/50 rounded-lg overflow-hidden transition-all duration-300 group hover:bg-primary/60 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]">
      <div className="flex flex-col md:flex-row h-full">
        {/* Project Image - Left 1/3 */}
        <div className="md:w-1/3 relative p-2.5 h-full">
          <img
            src={props.image}
            alt="Flex The Box Game Screenshot"
            className="w-full h-full object-cover object-left group-hover:scale-[1.01] transition-transform duration-300 rounded-lg"
          />
        </div>

        {/* Project Details - Right 2/3 */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
              {props.title}
            </h3>
            <p className="text-gray-300 mb-4">{props.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {props.tags.map((tag) => {
                return (
                  <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={props.githubUrl}
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
              href={props.liveDemoUrl}
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
  );
}
