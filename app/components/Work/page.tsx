import SubHeader from "@/app/UI/SubHeading/page";
import { LuArrowUpRight, LuGithub, LuExternalLink } from "react-icons/lu";

function Work() {
  const projects = [
    {
      title: "Text Editor",
      description:
        "A modern rich-text editor built with React and TypeScript, supporting multiple content blocks, formatting, alignment and undo/redo functionality.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      github: "#",
      live: "https://my-text-editor-gamma.vercel.app/",
      featured: true,
    },
    {
      title: "Text Editor",
      description:
        "A modern rich-text editor built with React and TypeScript, supporting multiple content blocks, formatting, alignment and undo/redo functionality.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      github: "#",
      live: "https://my-text-editor-gamma.vercel.app/",
      featured: true,
    },
    {
      title: "Text Editor",
      description:
        "A modern rich-text editor built with React and TypeScript, supporting multiple content blocks, formatting, alignment and undo/redo functionality.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Movie App",
      description:
        "A responsive movie discovery application for browsing movies, viewing details and exploring popular content.",
      tech: ["React", "JavaScript", "CSS", "API"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="work"
      className="border-b border-border bg-background text-foreground"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-12
          sm:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="font-mono text-sm text-primary">/work</p>

          <h2 className="hero font-bold">Featured Projects</h2>

          <div className="max-w-2xl">
            <SubHeader title="Some propjects I've built and worked on." />
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-lg
                border
                border-border
                bg-card
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/60
                hover:bg-primary/[0.02]
               
              `}
            >
              {/* Terminal header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border
                  px-4
                  py-3
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>

                <span className="font-mono text-[10px] text-muted">
                  project_{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {project.live !== "#" && (
                <div className="relative h-40 overflow-hidden border-b border-border bg-background sm:h-44">
                  <iframe
                    src={project.live}
                    title={`${project.title} live preview`}
                    className="pointer-events-none h-full w-full"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-xs text-primary">
                      $ ./open-project
                    </p>

                    <h3
                      className="
                        font-mono
                        text-xl
                        font-semibold
                        text-foreground
                        transition-colors
                        group-hover:text-primary
                        sm:text-2xl
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  <LuArrowUpRight
                    className="
                      size-5
                      shrink-0
                      text-muted
                      transition-all
                      duration-200
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-primary
                    "
                  />
                </div>

                <p
                  className="
                    max-w-2xl
                    text-sm
                    leading-6
                    text-muted
                    sm:text-[15px]
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border
                        border-border
                        bg-background
                        px-2.5
                        py-1
                        font-mono
                        text-[10px]
                        text-terminal-key
                        transition-colors
                        group-hover:border-primary/30
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex gap-3 border-t border-border pt-4">
                  {/* <a
                    href={project.github}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-xs
                      text-muted
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <LuGithub className="size-4" />
                    GitHub
                  </a> */}

                  <a
                    href={project.live}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-xs
                      text-muted
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <LuExternalLink className="size-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects */}
        {/* <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="
              inline-flex
              items-center
              gap-2
              rounded-md
              border
              border-primary
              px-5
              py-2.5
              font-mono
              text-xs
              text-primary
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-primary/10
            "
          >
            View all projects
            <LuArrowUpRight className="size-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Work;
