import type { Metadata } from 'next';
import Directory from '@/components/Directory';
import { places, getNeighborhoods, getCuisines } from '@/data/places';

export const metadata: Metadata = {
  title: 'SLC Eat Drink — Find where to eat & drink in Salt Lake',
  description:
    'Browse Salt Lake City restaurants and bars with filters that matter: patio, late kitchen, drink license, brunch, price, vegan-friendly, and more.',
};

export default function HomePage() {
  return (
    <div className="hero-glow">
      <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Soft launch · Salt Lake City
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Find where to eat and drink in Salt Lake —{' '}
          <span className="text-amber-400">
            filtered for how you actually go out.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Patio or late kitchen? Full bar or tavern? Brunch with kids or open
          past midnight? Utah&apos;s quirks, filtered — not another generic
          &ldquo;restaurants near me.&rdquo;
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Directory
          places={places}
          neighborhoods={getNeighborhoods()}
          cuisines={getCuisines()}
        />
      </section>
    </div>
  );
}
