export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    quote: "I came for a snack and left with a lifestyle.",
    author: "Tunde",
    location: "Lagos",
  },
  {
    id: "review-2",
    quote: "The jollof ended an argument in my family. Nobody wanted to talk after the first bite.",
    author: "Amaka",
    location: "Enugu",
  },
  {
    id: "review-3",
    quote: "I asked for the bill and they asked if I was okay.",
    author: "Segun",
    location: "Ibadan",
  },
];
