import HeroHeading from "@/app/UI/Heading/page";
import SubHeader from "@/app/UI/SubHeading/page";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

function Skill() {
  const skills = [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#F1F5F3",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React Native",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#F1F5F3",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#F1F5F3",
    },
  ];

  return (
    <main className="border-b border-border bg-background text-foreground">
      <div
        className="
          mx-auto grid w-full max-w-7xl
          items-start gap-10
          px-5 py-12
          sm:px-8
          md:py-16
          lg:grid-cols-[0.7fr_1.8fr]
          lg:items-center
          lg:gap-16
          lg:px-10
          lg:py-20
        "
      >
        {/* Section Heading */}
        <div>
          <p className="mb-2 font-mono text-sm text-primary">/skills</p>

          <HeroHeading line2="My Tech Stack" />

          <SubHeader title="Technologies I work with" />
        </div>

        {/* Skills */}
        <div className="w-full">
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 sm:gap-3">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    group flex w-full flex-col
                    items-center justify-center
                    gap-1.5
                    rounded-lg
                    border border-border
                    bg-card
                    p-2
                    text-center
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-primary/60
                    hover:bg-primary/[0.03]
                    sm:min-h-14
                    sm:flex-row
                    sm:justify-start
                    sm:gap-3
                    sm:p-3
                    sm:text-left
                  "
                >
                  <Icon
                    className="
                      size-5 shrink-0
                      transition-transform duration-200
                      group-hover:scale-110
                    "
                    style={{ color: skill.color }}
                  />

                  <span
                    className="
                      min-w-0 truncate
                      font-mono text-[10px]
                      text-muted-foreground
                      transition-colors duration-200
                      group-hover:text-foreground
                      sm:text-sm
                    "
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skill;
