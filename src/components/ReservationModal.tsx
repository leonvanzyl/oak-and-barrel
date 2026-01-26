"use client";

import { useState } from "react";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM",
];

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "2",
    date: "",
    time: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        partySize: "2",
        date: "",
        time: "",
        specialRequests: "",
      });
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reserve a Table">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[var(--color-success)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-xl font-semibold text-[var(--color-charcoal)] mb-2">
            Reservation Confirmed!
          </h3>
          <p className="font-body text-[var(--color-gray-warm)]">
            We&apos;ll send a confirmation to your email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] placeholder:text-[var(--color-gray-warm)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] placeholder:text-[var(--color-gray-warm)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] placeholder:text-[var(--color-gray-warm)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Party Size */}
          <div>
            <label
              htmlFor="partySize"
              className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Party Size
            </label>
            <select
              id="partySize"
              name="partySize"
              required
              value={formData.partySize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
            >
              {partySizes.map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? "Guest" : "Guests"}
                </option>
              ))}
              <option value="10+">10+ Guests</option>
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={today}
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Time
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label
              htmlFor="specialRequests"
              className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Special Requests (optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] placeholder:text-[var(--color-gray-warm)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors resize-none"
              placeholder="Dietary restrictions, special occasions, seating preferences..."
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full" isLoading={isSubmitting}>
            Complete Reservation
          </Button>
        </form>
      )}
    </Modal>
  );
}
