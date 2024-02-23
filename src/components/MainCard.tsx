import classes from "../styles/MainCard.module.css";
import { TestData } from "../type";

type MainCardProps = {
  recipe: TestData;
};

const MainCard = ({ recipe }: MainCardProps) => {
  // console.log(recipe);
  return (
    <div className={classes.card}>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={`${recipe.label} picture`} />
    </div>
  );
};

export default MainCard;
