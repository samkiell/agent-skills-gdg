export default function About() {
  return (
    <section className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-12">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-accent"></span>
            <span className="text-xs font-body font-bold uppercase tracking-widest text-accent">
              Tradition &amp; Heritage
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-heading font-bold tracking-tight text-fg sm:text-4xl">
            Our story
          </h2>

          <div className="relative mt-6">
            <p className="text-lg font-body leading-relaxed text-fg sm:text-xl">
              Buka Republic started with one pot, one spoon, and one auntie who said &apos;sit down, you are too thin.&apos; Today we are slightly bigger, but the auntie is still in charge.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm font-body text-muted">
            <div>
              <span className="block font-heading font-bold text-fg text-base">Founded in Fire</span>
              <span className="text-xs">Authentic firewood aroma</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div>
              <span className="block font-heading font-bold text-fg text-base">Secret Pepper Blend</span>
              <span className="text-xs">Passed down generations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
