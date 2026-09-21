'use client';

import { useState, FormEvent } from 'react';

export default function ClaimForm({
  defaultVenue = '',
  variant = 'claim',
}: {
  defaultVenue?: string;
  variant?: 'claim' | 'feature';
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [venue, setVenue] = useState(defaultVenue);
  const [submitted, setSubmitted] = useState(false);

  const isFeature = variant === 'feature';
  const subject = isFeature
    ? `Feature listing request: ${venue || 'venue'}`
    : `Claim listing: ${venue || 'venue'}`;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      isFeature ? 'Featured listing interest ($49/mo)' : 'Claim listing request',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Venue: ${venue}`,
    ].join('\n');

    // Open mailto as lead channel; also show in-app success
    window.location.href = `mailto:hello@slceatdrink.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <p className="text-lg font-semibold text-emerald-300">Got it — thanks!</p>
        <p className="mt-2 text-sm text-slate-300">
          Your request is ready in your email client. If nothing opened, write us at{' '}
          <a
            href="mailto:hello@slceatdrink.com"
            className="text-amber-400 underline underline-offset-2"
          >
            hello@slceatdrink.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-slate-400 hover:text-slate-200"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field-input"
            placeholder="Jordan Lee"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field-input"
            placeholder="you@venue.com"
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="field-input"
            placeholder="(801) 555-0100"
          />
        </Field>
        <Field label="Venue name" required>
          <input
            required
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="field-input"
            placeholder="Your restaurant or bar"
          />
        </Field>
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-amber-500/20 transition hover:bg-amber-400 sm:w-auto sm:px-8"
      >
        {isFeature ? 'Request featured placement' : 'Claim this listing'}
      </button>
      <p className="text-xs text-slate-500">
        No payment yet — we&apos;ll follow up by email. Stripe coming later.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-300">
        {label}
        {required && <span className="text-amber-400"> *</span>}
      </span>
      {children}
    </label>
  );
}
