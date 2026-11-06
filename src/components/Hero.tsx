export default function Hero() {
  return (
    <section className="bg-bg py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7">
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold tracking-tight text-fg leading-[1.08]">
              Welcome to Buka Republic
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-body leading-relaxed text-muted">
              Where the jollof has a fan club and the suya has a restraining order against your diet.
            </p>
            <div className="mt-10">
              <a
                href="#reserve"
                className="inline-flex min-h-[48px] items-center justify-center rounded-token bg-accent px-8 py-3.5 text-base font-body font-semibold text-bg shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent"
              >
                Reserve a table
              </a>
            </div>
          </div>

          {/* Right Column: Big warm surface block with the tagline */}
          <div className="lg:col-span-5">
            <div className="flex flex-col justify-center rounded-token border border-border bg-surface p-8 sm:p-12 text-center shadow-sm">
              <span className="text-sm font-body font-semibold uppercase tracking-widest text-muted">
                Buka Republic
              </span>
              <p className="mt-4 text-2xl sm:text-3xl font-heading font-bold leading-snug text-fg">
                &ldquo;Food so good, your ancestors would ask for a plate.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
