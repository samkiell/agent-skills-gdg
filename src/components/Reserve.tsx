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
    <section id="reserve" className="border-b border-border bg-surface-warm py-section">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 shadow-md sm:p-12">
          <div className="text-center">
            <span className="text-xs font-body font-bold uppercase tracking-widest text-accent">
              Table Bookings
            </span>
            <h2 className="mt-2 text-3xl font-heading font-extrabold tracking-tight text-fg sm:text-4xl">
              Reserve a table
            </h2>
            <p className="mt-2 text-base font-body text-muted">
              Secure your spot before the jollof runs out.
            </p>
          </div>

          {successMessage && (
            <div
              role="alert"
              className="mt-6 rounded-token border border-emerald-200 bg-emerald-50 p-4 text-sm font-body text-emerald-900"
            >
              <p className="font-semibold">{successMessage}</p>
            </div>
          )}

          {serverError && (
            <div
              role="alert"
              className="mt-6 rounded-token border border-rose-200 bg-rose-50 p-4 text-sm font-body text-rose-900"
            >
              <p className="font-semibold">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
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
                  placeholder="e.g. Samuel Ade"
                  className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg placeholder:text-muted/60 focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-body font-medium text-rose-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
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
                  placeholder="e.g. +234 800 000 0000"
                  className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg placeholder:text-muted/60 focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-body font-medium text-rose-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
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
                  className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs font-body font-medium text-rose-600">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
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
                  className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
                />
                {errors.time && (
                  <p className="mt-1.5 text-xs font-body font-medium text-rose-600">{errors.time}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
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
                className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
              />
              {errors.guests && (
                <p className="mt-1.5 text-xs font-body font-medium text-rose-600">{errors.guests}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-body font-bold uppercase tracking-wider text-fg"
              >
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requests or dietary needs..."
                className="mt-2 block w-full rounded-token border border-border bg-bg px-4 py-2.5 text-sm font-body text-fg placeholder:text-muted/60 focus-visible:ring-2 focus-visible:ring-accent"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-token bg-accent py-3.5 text-sm font-body font-bold uppercase tracking-wider text-white shadow-md hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isSubmitting ? "Booking..." : "Reserve a table"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
