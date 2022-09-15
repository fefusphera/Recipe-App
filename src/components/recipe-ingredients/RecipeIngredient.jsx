import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";

const RecipeIngredient = () => {
  const recipe = useOutletContext();
  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);

  // console.log(recipe.meals[0]);
  // console.log(indexes);

  return (
    <div>
      <h1>Ingredienti:</h1>
    </div>
  );
};

export default RecipeIngredient;
