import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-bg py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-fg leading-tight">
            Reviews
          </h2>
          <p className="mt-4 text-base sm:text-lg font-body text-muted leading-relaxed">
            Honest words from people who couldn&apos;t keep quiet.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col justify-between rounded-token border border-border bg-surface p-8 shadow-sm"
            >
              <blockquote className="text-base sm:text-lg font-body leading-relaxed text-fg">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm font-body text-muted">
                <span className="font-heading font-bold text-fg">{review.author}</span>,{" "}
                <span>{review.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
