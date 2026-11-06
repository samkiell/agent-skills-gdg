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
    <section id="reserve" className="relative bg-[#0B0F19] py-section">
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              <span className="mr-3">📅</span>
              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                Reserve a table
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg font-normal text-slate-300">
              Secure your spot before the jollof runs out.
            </p>
          </div>

          {successMessage && (
            <div
              role="alert"
              className="mt-8 rounded-2xl border border-purple-500/40 bg-purple-500/10 p-5 text-center text-sm font-semibold text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <p>{successMessage}</p>
            </div>
          )}

          {serverError && (
            <div
              role="alert"
              className="mt-8 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-5 text-center text-sm font-semibold text-rose-200"
            >
              <p>{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-purple-300"
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
                className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-purple-300"
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
                className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-bold uppercase tracking-wider text-purple-300"
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
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
                {errors.date && (
                  <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-xs font-bold uppercase tracking-wider text-purple-300"
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
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
                {errors.time && (
                  <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.time}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-xs font-bold uppercase tracking-wider text-purple-300"
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
                className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              {errors.guests && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">{errors.guests}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-bold uppercase tracking-wider text-purple-300"
              >
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white backdrop-blur-md placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-purple-400"
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
