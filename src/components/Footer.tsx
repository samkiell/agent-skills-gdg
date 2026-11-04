export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-heading font-semibold text-fg">
              Buka Republic
            </p>
            <p className="mt-1 text-sm font-body text-muted">
              Buka Republic. Open whenever the jollof is ready.
            </p>
            <p className="mt-1 text-sm font-body text-muted">
              12 Suya Lane, Ife
            </p>
          </div>
          <div className="border-t border-border pt-4 sm:border-t-0 sm:pt-0">
            <p className="text-xs font-body text-muted">
              Made for a GDG demo. No real food was harmed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

