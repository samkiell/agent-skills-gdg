import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-fg sm:text-3xl">
            Reviews
          </h2>
          <p className="mt-2 text-sm font-body text-muted sm:text-base">
            Honest words from people who couldn&apos;t keep quiet.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col justify-between rounded-token border border-border bg-surface p-6"
            >
              <blockquote className="text-sm font-body leading-relaxed text-fg sm:text-base">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4 text-xs font-body text-muted sm:text-sm">
                <span className="font-semibold text-fg">{review.author}</span>,{" "}
                {review.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

