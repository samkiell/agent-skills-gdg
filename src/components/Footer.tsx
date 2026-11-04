export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone-900 text-stone-200 py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-token bg-accent text-xs font-bold text-white shadow-sm">
                BR
              </span>
              <span className="text-xl font-heading font-black text-white">
                Buka Republic
              </span>
            </div>
            <p className="mt-4 text-sm font-body leading-relaxed text-stone-400">
              Buka Republic. Open whenever the jollof is ready.
            </p>
          </div>

          <div>
            <p className="text-xs font-body font-bold uppercase tracking-widest text-accent">
              Visit Us
            </p>
            <p className="mt-4 text-sm font-body text-stone-300">
              12 Suya Lane, Ife
            </p>
            <p className="mt-2 text-xs font-body text-stone-400">
              Walk-ins welcome &bull; Reservations recommended
            </p>
          </div>

          <div>
            <p className="text-xs font-body font-bold uppercase tracking-widest text-accent">
              About This Project
            </p>
            <p className="mt-4 text-xs font-body leading-relaxed text-stone-400">
              Made for a GDG demo. No real food was harmed.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-8 text-center text-xs font-body text-stone-500">
          <p>&copy; {new Date().getFullYear()} Buka Republic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
