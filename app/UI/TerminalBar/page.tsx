function TerminalBar() {
  return (
    <div className="relative hidden lg:block">
      {/* Background dot pattern */}
      <div
        className="
              absolute
              -inset-10
              -z-10
              opacity-30
              [background-image:radial-gradient(theme(colors.primary)_1px,transparent_1px)]
              [background-size:18px_18px]
            "
      />

      <div
        className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-primary/70
              bg-card
              p-6
              shadow-[0_0_40px_rgba(0,232,137,0.08)]
            "
      >
        {/* Terminal top bar */}
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </div>

          <span className="text-xs text-muted-foreground">about.me</span>
        </div>

        {/* Terminal content */}
        <div className="space-y-3 font-mono text-sm leading-6">
          <p className="text-primary">$ cat about.me</p>

          <p>
            <span className="text-terminal-key">name:</span>{" "}
            <span className="text-terminal-value">Olusegun Adebomi</span>
          </p>

          <p>
            <span className="text-terminal-key">role:</span>{" "}
            <span className="text-terminal-value">Frontend Engineer</span>
          </p>

          <p>
            <span className="text-terminal-key">location:</span>{" "}
            <span className="text-terminal-value">Nigeria 🇳🇬</span>
          </p>

          <p>
            <span className="text-terminal-key">experience:</span>{" "}
            <span className="text-terminal-value">7+ years</span>
          </p>

          <p>
            <span className="text-terminal-key">passion:</span>{" "}
            <span className="text-terminal-value">
              Building impactful products
            </span>
          </p>

          <div className="pt-4">
            <span className="text-primary">$</span>{" "}
            <span className="inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalBar;
