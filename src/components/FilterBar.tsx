'use client';

import { PlaceFilters, DrinkLicense } from '@/types/place';
import { drinkLicenseLabel, activeFilterCount, EMPTY_FILTERS } from '@/lib/filters';

interface Props {
  filters: PlaceFilters;
  onChange: (f: PlaceFilters) => void;
  neighborhoods: string[];
  cuisines: string[];
  resultCount: number;
}

const BOOL_FILTERS: {
  key: keyof Pick<
    PlaceFilters,
    | 'patio'
    | 'lateKitchen'
    | 'kidFriendly'
    | 'brunch'
    | 'veganFriendly'
    | 'dogFriendlyPatio'
    | 'openLate'
  >;
  label: string;
}[] = [
  { key: 'patio', label: 'Patio' },
  { key: 'lateKitchen', label: 'Late kitchen' },
  { key: 'openLate', label: 'Open late' },
  { key: 'brunch', label: 'Brunch' },
  { key: 'kidFriendly', label: 'Kid-friendly' },
  { key: 'veganFriendly', label: 'Vegan-friendly' },
  { key: 'dogFriendlyPatio', label: 'Dog-friendly patio' },
];

const LICENSES: DrinkLicense[] = [
  'full_bar',
  'tavern_beer',
  'restaurant',
  'none',
];

export default function FilterBar({
  filters,
  onChange,
  neighborhoods,
  cuisines,
  resultCount,
}: Props) {
  const count = activeFilterCount(filters);

  function toggleArray<T>(arr: T[], value: T): T[] {
    return arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
  }

  function toggleBool(
    key:
      | 'patio'
      | 'lateKitchen'
      | 'kidFriendly'
      | 'brunch'
      | 'veganFriendly'
      | 'dogFriendlyPatio'
      | 'openLate'
  ) {
    onChange({
      ...filters,
      [key]: filters[key] === true ? null : true,
    });
  }

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search name, cuisine, neighborhood…"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-amber-500/40 focus:border-amber-500/50 focus:ring-2"
          />
        </div>
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-slate-200">{resultCount}</span>{' '}
            {resultCount === 1 ? 'spot' : 'spots'}
          </p>
          {count > 0 && (
            <button
              type="button"
              onClick={() => onChange(EMPTY_FILTERS)}
              className="text-xs font-medium text-amber-400 hover:text-amber-300"
            >
              Clear filters ({count})
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {BOOL_FILTERS.map(({ key, label }) => (
          <Chip
            key={key}
            active={filters[key] === true}
            onClick={() => toggleBool(key)}
          >
            {label}
          </Chip>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect
          label="Neighborhood"
          value=""
          onChange={(v) => {
            if (!v) return;
            onChange({
              ...filters,
              neighborhoods: toggleArray(filters.neighborhoods, v),
            });
          }}
          options={neighborhoods}
          selected={filters.neighborhoods}
          onRemove={(v) =>
            onChange({
              ...filters,
              neighborhoods: filters.neighborhoods.filter((x) => x !== v),
            })
          }
        />
        <FilterSelect
          label="Cuisine / vibe"
          value=""
          onChange={(v) => {
            if (!v) return;
            onChange({
              ...filters,
              cuisines: toggleArray(filters.cuisines, v),
            });
          }}
          options={cuisines}
          selected={filters.cuisines}
          onRemove={(v) =>
            onChange({
              ...filters,
              cuisines: filters.cuisines.filter((x) => x !== v),
            })
          }
        />
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
            Drink license
          </p>
          <div className="flex flex-wrap gap-1.5">
            {LICENSES.map((lic) => (
              <Chip
                key={lic}
                active={filters.drinkLicenses.includes(lic)}
                onClick={() =>
                  onChange({
                    ...filters,
                    drinkLicenses: toggleArray(filters.drinkLicenses, lic),
                  })
                }
              >
                {drinkLicenseLabel(lic)}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
            Price
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 3, 4].map((lvl) => (
              <Chip
                key={lvl}
                active={filters.priceLevels.includes(lvl)}
                onClick={() =>
                  onChange({
                    ...filters,
                    priceLevels: toggleArray(filters.priceLevels, lvl),
                  })
                }
              >
                {'$'.repeat(lvl)}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
        active
          ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/20'
          : 'border border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-500 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  selected,
  onRemove,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  selected: string[];
  onRemove: (v: string) => void;
}) {
  const available = options.filter((o) => !selected.includes(o));
  return (
    <div>
      <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          e.target.value = '';
        }}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-2 text-sm text-slate-200 outline-none focus:border-amber-500/50"
      >
        <option value="">Add…</option>
        {available.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {selected.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1">
          {selected.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onRemove(s)}
              className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 hover:bg-amber-500/25"
            >
              {s}
              <span aria-hidden>×</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
