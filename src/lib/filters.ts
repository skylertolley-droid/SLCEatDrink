import { Place, PlaceFilters, DrinkLicense } from '@/types/place';

export const EMPTY_FILTERS: PlaceFilters = {
  search: '',
  neighborhoods: [],
  cuisines: [],
  patio: null,
  lateKitchen: null,
  kidFriendly: null,
  drinkLicenses: [],
  brunch: null,
  priceLevels: [],
  veganFriendly: null,
  dogFriendlyPatio: null,
  openLate: null,
};

export function filterPlaces(places: Place[], filters: PlaceFilters): Place[] {
  const q = filters.search.trim().toLowerCase();

  const filtered = places.filter((p) => {
    if (q) {
      const hay = [
        p.name,
        p.shortDescription,
        p.neighborhood,
        ...p.cuisine,
        ...p.tags,
        p.address,
      ]
        .join(' ')
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    if (
      filters.neighborhoods.length > 0 &&
      !filters.neighborhoods.includes(p.neighborhood)
    ) {
      return false;
    }

    if (filters.cuisines.length > 0) {
      const match = filters.cuisines.some(
        (c) =>
          p.cuisine.some((pc) => pc.toLowerCase() === c.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase() === c.toLowerCase())
      );
      if (!match) return false;
    }

    if (filters.patio === true && !p.patio) return false;
    if (filters.lateKitchen === true && !p.lateKitchen) return false;
    if (filters.kidFriendly === true && !p.kidFriendly) return false;
    if (filters.brunch === true && !p.brunch) return false;
    if (filters.veganFriendly === true && !p.veganFriendly) return false;
    if (filters.dogFriendlyPatio === true && !p.dogFriendlyPatio) return false;
    if (filters.openLate === true && !p.openLate) return false;

    if (
      filters.drinkLicenses.length > 0 &&
      !filters.drinkLicenses.includes(p.drinkLicense)
    ) {
      return false;
    }

    if (
      filters.priceLevels.length > 0 &&
      !filters.priceLevels.includes(p.priceLevel)
    ) {
      return false;
    }

    return true;
  });

  return filtered.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

export function priceLabel(level: number): string {
  return '$'.repeat(Math.min(4, Math.max(1, level)));
}

export function drinkLicenseLabel(license: DrinkLicense): string {
  switch (license) {
    case 'full_bar':
      return 'Full bar';
    case 'tavern_beer':
      return 'Tavern / beer';
    case 'restaurant':
      return 'Restaurant liquor';
    case 'none':
      return 'No liquor';
  }
}

export function googleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function activeFilterCount(filters: PlaceFilters): number {
  let n = 0;
  if (filters.search.trim()) n++;
  n += filters.neighborhoods.length;
  n += filters.cuisines.length;
  n += filters.drinkLicenses.length;
  n += filters.priceLevels.length;
  if (filters.patio) n++;
  if (filters.lateKitchen) n++;
  if (filters.kidFriendly) n++;
  if (filters.brunch) n++;
  if (filters.veganFriendly) n++;
  if (filters.dogFriendlyPatio) n++;
  if (filters.openLate) n++;
  return n;
}
