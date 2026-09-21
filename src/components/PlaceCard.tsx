import Link from 'next/link';
import { Place } from '@/types/place';
import { priceLabel } from '@/lib/filters';

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link
      href={`/place/${place.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm transition hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${place.gradient || 'from-slate-700 to-slate-900'}`}
      >
        {place.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={place.imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-overlay transition duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        {place.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-950 shadow">
            Featured
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-md bg-slate-950/70 px-2 py-0.5 text-xs font-medium text-slate-200 backdrop-blur">
          {priceLabel(place.priceLevel)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <h3 className="text-base font-semibold text-slate-50 transition group-hover:text-amber-300">
            {place.name}
          </h3>
          <p className="mt-0.5 text-xs text-slate-400">
            {place.neighborhood} · {place.cuisine.slice(0, 2).join(', ')}
          </p>
        </div>
        <p className="line-clamp-2 flex-1 text-sm leading-snug text-slate-400">
          {place.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {place.patio && <Badge>Patio</Badge>}
          {place.lateKitchen && <Badge>Late kitchen</Badge>}
          {place.brunch && <Badge>Brunch</Badge>}
          {place.openLate && <Badge>Open late</Badge>}
          {place.veganFriendly && <Badge>Vegan-friendly</Badge>}
          {place.kidFriendly && <Badge>Kid-friendly</Badge>}
        </div>
      </div>
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-300">
      {children}
    </span>
  );
}
