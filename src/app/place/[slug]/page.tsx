import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { places, getPlaceBySlug } from '@/data/places';
import {
  priceLabel,
  drinkLicenseLabel,
  googleMapsUrl,
} from '@/lib/filters';
import ClaimForm from '@/components/ClaimForm';

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const place = getPlaceBySlug(params.slug);
  if (!place) return { title: 'Place not found' };
  return {
    title: `${place.name} — ${place.neighborhood}`,
    description: place.shortDescription,
  };
}

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = getPlaceBySlug(params.slug);
  if (!place) notFound();

  const badges: string[] = [];
  if (place.patio) badges.push('Patio');
  if (place.lateKitchen) badges.push('Late kitchen');
  if (place.openLate) badges.push('Open late');
  if (place.brunch) badges.push('Brunch');
  if (place.kidFriendly) badges.push('Kid-friendly');
  if (place.veganFriendly) badges.push('Vegan-friendly');
  if (place.dogFriendlyPatio) badges.push('Dog-friendly patio');
  if (place.reservationsRecommended) badges.push('Reservations recommended');

  return (
    <div className="hero-glow">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"
        >
          ← Back to explore
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
          <div
            className={`relative h-48 bg-gradient-to-br sm:h-64 ${place.gradient || 'from-slate-700 to-slate-900'}`}
          >
            {place.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={place.imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                {place.featured && (
                  <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                    Featured
                  </span>
                )}
                <span className="rounded-md bg-slate-950/60 px-2 py-0.5 text-xs text-slate-300 backdrop-blur">
                  {priceLabel(place.priceLevel)}
                </span>
                <span className="text-xs text-slate-400">
                  {place.claimStatus === 'claimed' ? 'Claimed' : 'Unclaimed'}
                </span>
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {place.name}
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                {place.neighborhood} · {place.cuisine.join(' · ')}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <p className="text-base leading-relaxed text-slate-300">
                {place.shortDescription}
              </p>

              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Filters & vibes
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
                    {drinkLicenseLabel(place.drinkLicense)}
                  </span>
                  {badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {b}
                    </span>
                  ))}
                  {place.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-sm">
                <p className="font-medium text-slate-200">Address</p>
                <p className="mt-1 text-slate-400">{place.address}</p>
                {place.phone && (
                  <p className="mt-2 text-slate-400">
                    <a
                      href={`tel:${place.phone}`}
                      className="hover:text-amber-400"
                    >
                      {place.phone}
                    </a>
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl(place.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 hover:border-amber-500/40 hover:text-amber-300"
                  >
                    Open in Google Maps
                  </a>
                  {place.website && (
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 hover:border-amber-500/40 hover:text-amber-300"
                    >
                      Visit website
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Photos are generic food/drink stock — not photos of this venue.
                Amenities reflect public reputation and may change; confirm with
                the business.
              </p>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5">
                <p className="text-sm font-semibold text-amber-200">
                  Feature your spot — $49/mo
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Pin to the top of matching filter results with a Featured
                  badge. Reach locals who filter for patio, late kitchen, and
                  drink license.
                </p>
                <Link
                  href="/advertise"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400"
                >
                  Learn about featuring
                </Link>
              </div>

              {place.claimStatus === 'unclaimed' && (
                <div
                  id="claim"
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <p className="text-sm font-semibold text-slate-100">
                    Claim this listing
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Free — confirm you represent the venue and we&apos;ll update
                    details.
                  </p>
                  <div className="mt-4">
                    <ClaimForm defaultVenue={place.name} variant="claim" />
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
