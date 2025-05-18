export interface BudgetRange {
  min: number;
  max: number;
  step: number;
}

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: number;
  mobiliado: boolean;
}

export interface ShowcaseProperty {
  image: string;
  title: string;
  subtitle: string;
  features: PropertyFeatures;
}

export interface FormPreferences {
  furnished: string | null;
  minArea: number;
  maxArea: number;
  suites: number | null;
  additionalRequests: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  heroImage: string;
  showcaseProperty: ShowcaseProperty;
  budgetRanges: {
    venda: BudgetRange;
    locacao: BudgetRange;
  };
}
