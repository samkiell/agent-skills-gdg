export default function Hero() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-heading font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
            Welcome to Buka Republic
          </h1>
          <p className="mt-4 text-base font-body text-muted sm:text-lg">
            Where the jollof has a fan club and the suya has a restraining order against your diet.
          </p>
          <div className="mt-8">
            <a
              href="#reserve"
              className="inline-block rounded-token border border-accent bg-accent px-6 py-3 text-sm font-body font-medium text-bg hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent"
            >
              Reserve a table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

