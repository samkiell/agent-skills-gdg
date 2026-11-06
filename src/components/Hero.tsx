export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/60 via-indigo-950/40 to-[#0B0F19] py-section">
      {/* Background neon blur orbs */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 blur-[120px]" />
      
      <div className="relative mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold text-purple-300 backdrop-blur-xl shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span>✨</span>
            <span>Next-Gen Dining Experience</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="mr-3">✨</span>
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
              Welcome to Buka Republic
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-slate-300">
            Where the jollof has a fan club and the suya has a restraining order against your diet.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#reserve"
              className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-9 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              Reserve a table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
