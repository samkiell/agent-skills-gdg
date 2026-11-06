export default function About() {
  return (
    <section className="relative bg-[#0B0F19] py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            <span className="mr-3">📖</span>
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Our story
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-slate-300">
            Buka Republic started with one pot, one spoon, and one auntie who said &apos;sit down, you are too thin.&apos; Today we are slightly bigger, but the auntie is still in charge.
          </p>
        </div>
      </div>
    </section>
  );
}
