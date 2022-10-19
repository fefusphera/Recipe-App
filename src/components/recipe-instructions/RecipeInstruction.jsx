import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const RecipeInstruction = () => {
  const data = useOutletContext();

  // const { strInstructions } = recipe;
  // console.log(recipe.meals[0].strInstructions);
  console.log("ISTRUZIONI", data);

  return (
    <div className={styles.instructionsCard}>
      {/* <h1 className={styles.instructionsTitle}>Instructions:</h1> */}
      <p className={styles.Instructions}>
        {data.meals[0].strInstructions}
        {/* {instructions} */}
      </p>
    </div>
  );
};

export default RecipeInstruction;
