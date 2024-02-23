export type TestData = {
  calories: number;
  cuisineType: string[];
  dishType: string[];
  healthLabels: string[];
  image: string;
  ingredientLines: string[];
  ingredients: Ingredient[];
  label: string;
  mealType: string[];
  url: string | null;
  yield: number;
};

export type RecipeResponse = {
  recipe: Recipe;
  _links: Links;
};

export type Links = {
  self: RecipeResponse;
};

export type Self = {
  href: string;
  title: Title;
};

export type Title = "Self";

export type Recipe = {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: { [key: string]: Total };
  totalDaily: { [key: string]: Total };
  digest: Digest[];
  tags?: string[];
};

export type Digest = {
  label: Label;
  tag: string;
  schemaOrgTag: SchemaOrgTag | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: Unit;
  sub?: Digest[];
};

export type Label =
  | "Calcium"
  | "Carbs"
  | "Cholesterol"
  | "Energy"
  | "Saturated"
  | "Fat"
  | "Iron"
  | "Fiber"
  | "Folate equivalent (total)"
  | "Potassium"
  | "Magnesium"
  | "Sodium"
  | "Niacin (B3)"
  | "Phosphorus"
  | "Protein"
  | "Riboflavin (B2)"
  | "Thiamin (B1)"
  | "Vitamin E"
  | "Vitamin A"
  | "Vitamin B12"
  | "Vitamin B6"
  | "Vitamin C"
  | "Vitamin D"
  | "Vitamin K"
  | "Zinc"
  | "Carbohydrates (net)"
  | "Monounsaturated"
  | "Polyunsaturated"
  | "Trans"
  | "Folic acid"
  | "Folate (food)"
  | "Sugars"
  | "Sugars, added"
  | "Water"
  | "Sugar alcohols"
  | "Carbs (net)";

export type SchemaOrgTag =
  | "fatContent"
  | "carbohydrateContent"
  | "proteinContent"
  | "cholesterolContent"
  | "sodiumContent"
  | "saturatedFatContent"
  | "transFatContent"
  | "fiberContent"
  | "sugarContent";

export type Unit = "g" | "mg" | "µg" | "%" | "kcal";

export type Images = {
  THUMBNAIL: Large;
  SMALL: Large;
  REGULAR: Large;
  LARGE?: Large;
};

export type Large = {
  url: string;
  width: number;
  height: number;
};

export type Ingredient = {
  text: string;
  quantity: number;
  measure: null | string;
  food: string;
  weight: number;
  foodCategory: string | null;
  foodId: string;
  image: null | string;
};

export type MealType = string | string[];

export type Total = {
  label: Label;
  quantity: number;
  unit: Unit;
};
