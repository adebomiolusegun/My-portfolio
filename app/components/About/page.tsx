import Button from "@/app/UI/Button/page";

function AboutPage() {
  return (
    <main className="bg-background text-foreground ">
      <div className="border-b border-border">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-lg ">
          I am a passionate software developer with experience in building web
          applications using modern technologies. I enjoy solving complex
          problems and continuously learning new skills to improve my craft.
        </p>

        <Button secondaryLabel="View Projects" />
      </div>
    </main>
  );
}

export default AboutPage;
