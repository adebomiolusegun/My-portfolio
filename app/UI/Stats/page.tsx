function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-card sm:grid-cols-4">
      <div className="flex flex-col items-center justify-center border-b border-border p-5 text-center sm:border-b-0 sm:border-r">
        <span className="font-mono text-3xl text-primary sm:text-4xl">5+</span>
        <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
          Years Experience
        </span>
      </div>

      <div className="flex flex-col items-center justify-center border-b border-border p-5 text-center sm:border-b-0 sm:border-r">
        <span className="font-mono text-3xl text-primary sm:text-4xl">20+</span>
        <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
          Projects Completed
        </span>
      </div>

      <div className="flex flex-col items-center justify-center border-r border-border p-5 text-center">
        <span className="font-mono text-3xl text-primary sm:text-4xl">10+</span>
        <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
          Happy Clients
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-5 text-center">
        <span className="font-mono text-3xl text-primary sm:text-4xl">3+</span>
        <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
          Products Shipped
        </span>
      </div>
    </div>
  );
}

export default Stats;
