export type DrinkLicense = 'full_bar' | 'tavern_beer' | 'restaurant' | 'none';
export type ClaimStatus = 'unclaimed' | 'claimed';

export interface Place {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  neighborhood: string;
  cuisine: string[];
  tags: string[];
  priceLevel: 1 | 2 | 3 | 4;
  patio: boolean;
  lateKitchen: boolean;
  kidFriendly: boolean;
  drinkLicense: DrinkLicense;
  brunch: boolean;
  veganFriendly: boolean;
  dogFriendlyPatio: boolean;
  reservationsRecommended: boolean;
  openLate: boolean;
  address: string;
  website?: string;
  phone?: string;
  imageUrl?: string;
  /** CSS gradient fallback when no imageUrl — never claim fake venue photos */
  gradient?: string;
  featured: boolean;
  claimStatus: ClaimStatus;
}

export interface PlaceFilters {
  search: string;
  neighborhoods: string[];
  cuisines: string[];
  patio: boolean | null;
  lateKitchen: boolean | null;
  kidFriendly: boolean | null;
  drinkLicenses: DrinkLicense[];
  brunch: boolean | null;
  priceLevels: number[];
  veganFriendly: boolean | null;
  dogFriendlyPatio: boolean | null;
  openLate: boolean | null;
}
