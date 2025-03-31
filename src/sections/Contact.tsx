export default function Contact() {
  return (
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
  );
}
