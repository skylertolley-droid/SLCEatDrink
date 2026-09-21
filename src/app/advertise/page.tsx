import type { Metadata } from 'next';
import ClaimForm from '@/components/ClaimForm';

export const metadata: Metadata = {
  title: 'Advertise & Feature your spot',
  description:
    'Feature your Salt Lake restaurant or bar on SLC Eat Drink for $49/mo. Claim your listing free. Reach locals filtering for patio, late kitchen, and drink license.',
};

export default function AdvertisePage() {
  return (
    <div className="hero-glow">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
          For owners
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Get found by locals who already know how they want to go out
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          SLC Eat Drink is a filter-first directory — patio, late kitchen, Utah
          drink license, brunch, kid-friendly, open late. Featured listings sit
          at the top of matching results with a clear badge. No bloated media
          kit. One price.
        </p>

        <div className="mt-10 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-slate-900/80 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-amber-200">
                Featured listing
              </p>
              <p className="mt-1 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-slate-400">/month</span>
              </p>
            </div>
            <a
              href="#feature-form"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400"
            >
              Request featured placement
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <Check /> Featured badge on your card
            </li>
            <li className="flex gap-2">
              <Check /> Pinned first when filters match your spot
            </li>
            <li className="flex gap-2">
              <Check /> Link to your website &amp; Google Maps
            </li>
            <li className="flex gap-2">
              <Check /> Cancel anytime — soft-launch pricing
            </li>
          </ul>
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            How revenue works (simple)
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-400">
            <li>
              <strong className="text-slate-200">Featured listings ($49/mo)</strong>{' '}
              — primary offer. Pin + badge in the directory people actually use.
            </li>
            <li>
              <strong className="text-slate-200">Claim listing (free)</strong> —
              owners confirm details; we upsell featuring when it makes sense.
            </li>
            <li>
              <strong className="text-slate-200">Later</strong> — private-event
              lead gen and light display ads once traffic justifies it. No Stripe
              checkout in this MVP; we close by email for now.
            </li>
          </ol>
        </section>

        <section id="feature-form" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-semibold text-slate-50">
            Request a featured spot
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Tell us who you are — we&apos;ll reply with next steps. No card
            required today.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
            <ClaimForm variant="feature" />
          </div>
        </section>

        <section id="claim" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-semibold text-slate-50">
            Or claim your listing free
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Already listed? Claim it so we can keep hours, amenities, and links
            accurate.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
            <ClaimForm variant="claim" />
          </div>
        </section>
      </div>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] text-amber-400">
      ✓
    </span>
  );
}
