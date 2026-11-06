import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-[#0B0F19] py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            <span className="mr-3">💬</span>
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal text-slate-300">
            Honest words from people who couldn&apos;t keep quiet.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-lg hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <div>
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <blockquote className="mt-4 text-base font-normal leading-relaxed text-slate-200">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">
                <span className="font-bold text-white">{review.author}</span>,{" "}
                <span className="text-purple-300">{review.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
