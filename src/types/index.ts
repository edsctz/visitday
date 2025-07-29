export interface BudgetRange {
  min: number;
  max: number;
  step: number;
}

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: number;
  vagas: number;
}

export interface ShowcaseProperty {
  image: string;
  title: string;
  subtitle: string;
  features: PropertyFeatures;
  propertyUrl: string;
}

export interface FormPreferences {
  vagas: number | null;
  minArea: number;
  maxArea: number;
  quartos: number | null;
  additionalRequests: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  heroImage: string;
  showcaseProperties: ShowcaseProperty[];
  listingPageUrl?: string;
  budgetRanges: {
    venda: BudgetRange;
    locacao: BudgetRange;
  };
}
