// import useGetRandomRecipes from "../util/useGetRandomRecipes";
import data from "../testData.json";
import { TestData } from "../type";
import MainCard from "./MainCard";
import classes from "../styles/MainCard.module.css";
const MainCardContainer = () => {
  // const recipes = useGetRandomRecipes();
  const recipes: TestData[] = data;
  // if (recipes.data) {
  //   console.log(recipes.data);
  // }
  const filtered = recipes.map((recipe) => ({
    label: recipe.label,
    image: recipe.image,
    ingredientLines: recipe.ingredientLines,
    healthLabels: recipe.healthLabels,
    ingredients: recipe.ingredients,
    cuisineType: recipe.cuisineType,
    mealType: recipe.mealType,
    dishType: recipe.dishType,
    calories: recipe.calories,
    yield: recipe.yield,
    url: recipe.url,
  }));

  console.log(filtered);
  return (
    <div className={classes.cardContainer}>
      <MainCard recipe={recipes[12]} />
    </div>
  );
};

export default MainCardContainer;
