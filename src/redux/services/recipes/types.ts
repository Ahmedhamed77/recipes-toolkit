export type RecipesResponse = {
  recipes: Recipe[];
};
export type Recipe = {
  uuid: string;
  name: string;
  images: string[];
  lastUpdated: number;
  description: string;
  instructions: string;
  difficulty: number;
};

export interface RecipeDetails extends Recipe {
  similar: SimilarProps[];
}

export type SimilarProps = {
  uuid: string;
  name: string;
  image: string;
};
