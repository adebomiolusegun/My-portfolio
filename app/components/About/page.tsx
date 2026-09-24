import Button from "@/app/UI/Button/page";
import { FaRegHeart } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";

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
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-primary">/about</p>
          <h1 className="hero pb-4 font-bold">About Me</h1>

          <p className="text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
            I&apos;m a Frontend Developer based in Nigeria.{" "}
            <p className="max-w-90">
              I create fast, accessible and beautiful web applications that
              solve real problems I enjoy working with modern technologies.
              collaborating with greate people and constantly leaning new things
            </p>
          </p>

          <div className="mt-7">
            <Button secondaryLabel="Download CV" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex items-center gap-5 rounded-xl border border-border bg-background/50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/5">
                <Icon className="icon-style" />
              </div>

              <div>
                <h2 className="font-semibold capitalize">{title}</h2>

                <p className="mt-1 text-sm text-foreground/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
