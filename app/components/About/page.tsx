import Button from "@/app/UI/Button/page";
import { FaRegHeart } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";
import SubHeader from "@/app/UI/SubHeading/page";

function AboutPage() {
  const features = [
    {
      icon: LuCodeXml,
      title: "Clean Code",
      description: "Maintainable & scalable",
    },
    {
      icon: BsLightning,
      title: "Fast & Efficient",
      description: "User-centered design",
    },
    {
      icon: FaRegHeart,
      title: "Passion",
      description: "Always improving",
    },
  ];

  return (
    <main className="border-b border-border bg-background text-foreground">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-start
          gap-10
          px-5
          py-12
          sm:px-8
          md:py-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
          lg:px-10
          lg:py-20
        "
      >
        {/* ABOUT CONTENT */}
        <div className="max-w-2xl">
          {/* Section label */}
          <p className="mb-2 font-mono text-sm text-primary">/about</p>

          {/* Heading */}
          <h1 className="hero pb-4 font-bold">About Me</h1>

          {/* Description */}
          <SubHeader
            title="I'm a Frontend Developer based in Nigeria."
            title2="
              I create fast, accessible and beautiful web applications
              that solve real problems. I enjoy working with modern
              technologies, collaborating with great people, and constantly
              learning new things.
            "
          />

          {/* CV */}
          <div className="mt-7">
            <Button secondaryLabel="Download CV" />
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group
                flex
                items-center
                gap-4
                rounded-md
                border
                border-border
                bg-card
                p-4
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-primary/60
                hover:bg-primary/[0.03]
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-primary/[0.04]
                  transition-all
                  duration-200
                  group-hover:border-primary/50
                  group-hover:bg-primary/10
                "
              >
                <Icon
                  className="
                    icon-style
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="min-w-0">
                <h2 className="font-mono text-sm font-semibold text-foreground">
                  {title}
                </h2>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
