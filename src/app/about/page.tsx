import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'SLC Eat Drink is a local Salt Lake City directory for restaurants and bars — filtered for patio, late kitchen, drink license, and how you actually go out.',
};

export default function AboutPage() {
  return (
    <div className="hero-glow">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Built for Salt Lake nights (and brunches)
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
          <p>
            SLC Eat Drink started from a simple frustration: generic restaurant
            apps don&apos;t care about Utah&apos;s drink licenses, late kitchens,
            or whether the patio is dog-friendly. Locals don&apos;t search
            &ldquo;Italian&rdquo; as often as they ask &ldquo;where can we sit
            outside and still get food after 10?&rdquo;
          </p>
          <p>
            This is a small, filter-first directory — not a tourist brochure.
            Listings are curated for Downtown, 9th &amp; 9th, Sugar House, the
            Avenues edge, Granary, Ballpark, Liberty Wells, and nearby
            neighborhoods. We&apos;re soft-launching, so expect gaps and the
            occasional outdated amenity flag.
          </p>
          <p>
            Revenue is intentional and light: featured placements at $49/mo keep
            the lights on without turning every page into an ad. Claiming a
            listing is free for owners who want accurate info.
          </p>
          <p>
            Questions, corrections, or a spot we missed?{' '}
            <a
              href="mailto:hello@slceatdrink.com"
              className="text-amber-400 underline underline-offset-2 hover:text-amber-300"
            >
              hello@slceatdrink.com
            </a>
            .
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Explore spots
          </Link>
          <Link
            href="/advertise"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-amber-500/40"
          >
            Feature your spot
          </Link>
        </div>
      </div>
    </div>
  );
}
