'use client';

import { useMemo, useState } from 'react';
import { Place, PlaceFilters } from '@/types/place';
import { EMPTY_FILTERS, filterPlaces } from '@/lib/filters';
import FilterBar from './FilterBar';
import PlaceCard from './PlaceCard';
import Link from 'next/link';

export default function Directory({
  places,
  neighborhoods,
  cuisines,
}: {
  places: Place[];
  neighborhoods: string[];
  cuisines: string[];
}) {
  const [filters, setFilters] = useState<PlaceFilters>(EMPTY_FILTERS);

  const results = useMemo(
    () => filterPlaces(places, filters),
    [places, filters]
  );

  return (
    <div className="space-y-8">
      <FilterBar
        filters={filters}
        onChange={setFilters}
        neighborhoods={neighborhoods}
        cuisines={cuisines}
        resultCount={results.length}
      />

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-slate-200">
            No spots match those filters
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Try clearing a filter or searching a different neighborhood. Utah
            drink laws are weird — we&apos;ll keep adding late-kitchen and
            tavern spots.
          </p>
          <button
            type="button"
            onClick={() => setFilters(EMPTY_FILTERS)}
            className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Show all spots
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      )}

      <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6 text-center sm:p-8">
        <p className="text-lg font-semibold text-slate-50">
          Own a restaurant or bar in Salt Lake?
        </p>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
          Get a Featured badge and pin to the top of matching filters for{' '}
          <span className="font-semibold text-amber-300">$49/mo</span>. Free to
          claim your listing.
        </p>
        <Link
          href="/advertise"
          className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400"
        >
          Feature your spot — $49/mo
        </Link>
      </div>
    </div>
  );
}
