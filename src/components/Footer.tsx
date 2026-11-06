export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A12] py-16 text-slate-400">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🍲</span>
              <span className="text-2xl font-black tracking-tight text-white">
                Buka Republic
              </span>
            </div>
            <p className="mt-3 text-base text-slate-400">
              Buka Republic. Open whenever the jollof is ready.
            </p>
            <p className="mt-1 text-sm text-purple-300">
              12 Suya Lane, Ife
            </p>
          </div>
          <div className="border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
            <p className="text-sm text-slate-500">
              Made for a GDG demo. No real food was harmed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
