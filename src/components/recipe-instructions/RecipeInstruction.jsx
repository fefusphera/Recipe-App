import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const RecipeInstruction = () => {
  const recipe = useOutletContext();
  // const { strInstructions } = recipe;
  // console.log(recipe.meals[0].strInstructions);

  return (
    <div className={styles.instructionsCard}>
      <h1 className={styles.instructionsTitle}>INSTRUCTIONS:</h1>
      <p className={styles.Instructions}>{recipe.meals[0].strInstructions}</p>
    </div>
  );
};

export default RecipeInstruction;
