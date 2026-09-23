import NavPage from "../Nav/page";

function Header() {
  return (
    <main className="min-h-screen bg-background text-foreground font-primary">
      <NavPage />
      <div className="flex flex-row gap-6 justify-center items-center p-4">
        <section className="border-b border-border justify-around items-center flex flex-col md:flex-row gap-6 p-4">
          <div className="bg-card">
            <p className="text-primary">$ whoami</p>

            <h1 className="text-5xl font-semibold">
              Hi, Im Adebomi. i write code and build things for{" "}
              <span className="text-primary">the web</span>
            </h1>

            <p className="text-muted font-secondary">
              Frontend Engineer who loves clean code, beautiful design and
              solving real problems.
            </p>

            <button className="bg-primary text-background hover:bg-primary-hover cursor-pointer">
              View Projects
            </button>
          </div>

          <div className="bg-card">
            <div className="text-primary w-50 h-50 border-4 border-primary rounded-lg flex justify-center items-center">
              <p className="text-2xl font-semibold">Adebomi Olusegun</p>
              <p className="text-muted font-secondary">Frontend Engineer</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Header;
