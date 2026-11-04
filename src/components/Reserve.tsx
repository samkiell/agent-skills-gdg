"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export default function Reserve() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Please select a date.";
    }

    if (!formData.time.trim()) {
      newErrors.time = "Please select a time.";
    }

    const guestNum = parseInt(formData.guests, 10);
    if (!formData.guests.trim() || isNaN(guestNum) || guestNum < 1 || guestNum > 12) {
      newErrors.guests = "Please enter between 1 and 12 guests.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: parseInt(formData.guests, 10),
          notes: formData.notes,
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setSuccessMessage("Table booked. The auntie has been notified.");
        setFormData({
          name: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          notes: "",
        });
      } else {
        setServerError(data.message || "Failed to make a reservation. Please try again.");
      }
    } catch {
      setServerError("Something went wrong while booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserve" className="border-b border-border bg-bg py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-heading font-bold text-fg sm:text-3xl">
            Reserve a table
          </h2>
          <p className="mt-2 text-sm font-body text-muted sm:text-base">
            Secure your spot before the jollof runs out.
          </p>

          {successMessage && (
            <div
              role="alert"
              className="mt-6 rounded-token border border-border bg-surface p-4 text-sm font-body text-fg"
            >
              <p className="font-medium">{successMessage}</p>
            </div>
          )}

          {serverError && (
            <div
              role="alert"
              className="mt-6 rounded-token border border-border bg-surface p-4 text-sm font-body text-fg"
            >
              <p className="font-medium text-fg">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-body font-medium text-fg"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
              />
              {errors.name && (
                <p className="mt-1 text-xs font-body text-muted">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-body font-medium text-fg"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
              />
              {errors.phone && (
                <p className="mt-1 text-xs font-body text-muted">{errors.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-body font-medium text-fg"
                >
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.date && (
                  <p className="mt-1 text-xs font-body text-muted">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-body font-medium text-fg"
                >
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.time && (
                  <p className="mt-1 text-xs font-body text-muted">{errors.time}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-body font-medium text-fg"
              >
                Guests (1 to 12) *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="12"
                value={formData.guests}
                onChange={handleChange}
                required
                className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
              />
              {errors.guests && (
                <p className="mt-1 text-xs font-body text-muted">{errors.guests}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-body font-medium text-fg"
              >
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="mt-1.5 block w-full rounded-token border border-border bg-bg px-3.5 py-2 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-token border border-accent bg-accent px-6 py-2.5 text-sm font-body font-medium text-bg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isSubmitting ? "Booking..." : "Book Table"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

