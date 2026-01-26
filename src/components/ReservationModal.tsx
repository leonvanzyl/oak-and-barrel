"use client";

import { useState } from "react";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    partySize: "2",
    dateTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          partySize: parseInt(formData.partySize, 10),
          dateTime: formData.dateTime,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create reservation");
      }

      setIsSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          partySize: "2",
          dateTime: "",
        });
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get minimum datetime (now)
  const now = new Date();
  const minDateTime = now.toISOString().slice(0, 16);

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
            We look forward to seeing you!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-[var(--color-error)]/10 text-[var(--color-error)] font-body text-sm">
              {error}
            </div>
          )}

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
          <div>
            <label
              htmlFor="dateTime"
              className="block font-body text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Date & Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              required
              min={minDateTime}
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-sand)] bg-white font-body text-[var(--color-charcoal)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-colors"
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
