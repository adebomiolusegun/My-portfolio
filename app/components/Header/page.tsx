import Skills from "@/app/UI/skills/page";
import NavPage from "../Nav/page";
import Stats from "@/app/UI/Stats/page";
import TerminalBar from "@/app/UI/TerminalBar/page";
import Button from "@/app/UI/Button/page";

function Header() {
  return (
    <main className="min-h-auto bg-background text-foreground font-primary">
      <NavPage />

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start">
              <p className="mb-5 text-sm font-medium text-primary sm:text-base">
                $ whoami
              </p>

              <div className="section-heading max-w-2xl">
                <h1>Hi, I&apos;m Adebomi.</h1>

                <h1>I write code and</h1>

                <h1>build things for </h1>
                <h1 className="text-primary">the web.</h1>
              </div>

              <p className="body mt-6 max-w-xs text-muted-foreground">
                Frontend Engineer who loves clean code, beautiful design and
                solving real problems.
              </p>

              <Skills />

              <div className="flex gap-4">
                <Button primaryLabel="View Projects" />
                <Button secondaryLabel="Get In Touch" />
              </div>
            </div>

            <TerminalBar />
          </div>

          <Stats />
        </div>
      </section>
    </main>
  );
}

export default Header;
