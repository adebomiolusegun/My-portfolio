function Skills() {
  const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"];

  return (
    <div className=" mt-6 max-w-xs md:max-w-full">
      <p className="mb-3 text-sm font-medium text-primary">$ skills --top</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border-border border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
