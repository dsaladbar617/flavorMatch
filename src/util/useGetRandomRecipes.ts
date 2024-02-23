import { useQuery } from "@tanstack/react-query";
import { RecipeResponse } from "../type";
import axios from "axios";

export default function useGetRandomRecipes() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["randomRecipes"],
    queryFn: async () => {
      // const data = await fetch(
      //   "https://api.edamam.com/api/recipes/v2?type=public&app_id=bafa2390&app_key=110a3914f879306381bb12b0964bc60e&mealType=Dinner&random=true"
      // )
      //   .then((res) => res.json())
      //   .then((data) => data.hits);

      const { data } = await axios.get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=bafa2390&app_key=110a3914f879306381bb12b0964bc60e&mealType=Dinner&random=true"
      );

      return data.hits as RecipeResponse[];
    },
  });
  return { data, isLoading, isError };
}
