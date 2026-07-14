"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { SITE } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const INTERESTS = [
  "AI Solutions & Products",
  "Innovation Labs",
  "Cybersecurity",
  "Global Market Expansion",
  "Managed Business Services",
  "Tenders & Government Advisory",
  "General enquiry",
];

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form with client-side validation.
 *
 * Submits to the /api/contact route stub. That route currently only logs
 * the payload — see app/api/contact/route.ts for where a real CRM/email
 * backend must be plugged in. If the API call fails, we fall back to a
 * pre-filled mailto: so no lead is ever lost.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(fields.email)) next.email = "Enter a valid email address.";
    if (!fields.message.trim()) next.message = "Tell us a little about your needs.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(
      `Website enquiry${fields.interest ? ` — ${fields.interest}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}\nInterest: ${fields.interest}\n\n${fields.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFields(EMPTY);
    } catch {
      // Backend not wired up yet — fall back to mailto so the lead survives.
      setStatus("error");
      mailtoFallback();
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-black/[0.07] bg-surface p-10 text-center shadow-card">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-text-primary">Thanks — message received.</h3>
        <p className="mt-2 max-w-sm text-sm text-text-body">
          Our team will be in touch shortly. For anything urgent, reach us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-electric-blue hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Work email" error={errors.email} htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            className={inputClass}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={update("company")}
            className={inputClass}
            placeholder="Company name"
          />
        </Field>
        <Field label="I'm interested in" htmlFor="interest">
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={update("interest")}
            className={inputClass}
          >
            <option value="">Select an area…</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i} className="bg-surface">
                {i}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="How can we help?" error={errors.message} htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          className={`${inputClass} resize-y`}
          placeholder="Bring us the mandate — a product to build, a market to enter, a system to fix."
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-teal">
          We opened your email client as a fallback. If nothing happened, email us
          directly at {SITE.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-electric-blue-dim disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-text-primary"
      >
        {label}
        {required && <span className="ml-0.5 text-electric-blue">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
