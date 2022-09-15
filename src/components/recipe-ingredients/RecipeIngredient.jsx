import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";
import { Fragment } from "react";

const RecipeIngredient = () => {
  const recipe = useOutletContext();

  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);

  console.log(recipe.meals[0].strYoutube);
  // console.log(indexes);
  console.log(`recipe.meals[0].strIngredient${indexes}`);

  return (
    <div>
      <h1>Ingredienti:</h1>
      <ul>
        {!!recipe &&
          indexes.map((index) => (
            <Fragment key={index}>
              {recipe.meals[0][`strIngredient${index}`]?.length ? (
                <li>
                  {recipe.meals[0][`strIngredient${index}`]}:
                  {recipe.meals[0][`strMeasure${index}`]}
                </li>
              ) : null}
            </Fragment>
          ))}
      </ul>
    </div>
  );
};

export default RecipeIngredient;
