export default function Footer() {
  return (
    <footer className="border-t border-fg bg-fg text-bg py-16">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-heading font-black tracking-tight text-bg">
              Buka Republic
            </p>
            <p className="mt-2 text-base font-body text-bg/80">
              Buka Republic. Open whenever the jollof is ready.
            </p>
            <p className="mt-1 text-sm font-body text-bg/60">
              12 Suya Lane, Ife
            </p>
          </div>
          <div className="border-t border-bg/20 pt-6 md:border-t-0 md:pt-0">
            <p className="text-sm font-body text-bg/60">
              Made for a GDG demo. No real food was harmed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
