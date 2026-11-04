export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-warm to-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-body font-semibold tracking-wide text-accent shadow-sm">
            <span>Authentic Nigerian Flavors</span>
            <span>•</span>
            <span>Fresh Daily</span>
          </div>

          <h1 className="mt-6 text-4xl font-heading font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Welcome to Buka Republic
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-body leading-relaxed text-muted sm:text-xl">
            Where the jollof has a fan club and the suya has a restraining order against your diet.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reserve"
              className="rounded-token bg-accent px-8 py-3.5 text-sm font-body font-semibold text-white shadow-md hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent"
            >
              Reserve a table
            </a>
            <a
              href="#menu"
              className="rounded-token border border-border bg-surface px-8 py-3.5 text-sm font-body font-semibold text-fg shadow-sm hover:bg-surface-warm focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore Menu
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 border-t border-border/60 pt-8 text-xs font-body uppercase tracking-wider text-muted">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span>100% Party Jollof</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span>Authentic Spices</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span>Auntie Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
