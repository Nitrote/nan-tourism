"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <span className="text-4xl mb-4 block">✅</span>
        <h3 className="text-xl font-bold text-green-800 mb-2">{t("contact.form.sent.title")}</h3>
        <p className="text-green-700">{t("contact.form.sent.desc")}</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-[var(--color-primary)] font-medium hover:underline">
          {t("contact.form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.name")} *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.email")} *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.subject")} *</label>
        <select id="subject" name="subject" required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none bg-white">
          <option value="">{t("contact.form.selectTopic")}</option>
          <option value="tour-booking">{t("contact.form.tourBooking")}</option>
          <option value="travel-advice">{t("contact.form.travelAdvice")}</option>
          <option value="business-partnership">{t("contact.form.businessPartnership")}</option>
          <option value="general">{t("contact.form.general")}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.message")} *</label>
        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-y" placeholder={t("contact.form.placeholder")} />
      </div>
      <button type="submit" disabled={status === "sending"} className="bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
      </button>
    </form>
  );
}
