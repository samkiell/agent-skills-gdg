import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-accent">
            Guest Experiences
          </span>
          <h2 className="mt-2 text-3xl font-heading font-extrabold tracking-tight text-fg sm:text-4xl">
            Reviews
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base font-body text-muted sm:text-lg">
            Honest words from people who couldn&apos;t keep quiet.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure
              key={review.id}
              className="relative flex flex-col justify-between rounded-token border border-border bg-surface p-8 shadow-sm hover:border-accent/30 hover:shadow-md"
            >
              <div>
                <div className="text-accent text-3xl font-serif leading-none">“</div>
                <blockquote className="mt-3 text-base font-body leading-relaxed text-fg">
                  {review.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border pt-4 text-xs font-body text-muted">
                <span className="font-heading font-bold text-fg text-sm">{review.author}</span>
                <span className="ml-1 text-accent font-medium">({review.location})</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
