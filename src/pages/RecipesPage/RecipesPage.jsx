//singola ricetta:
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// path="/catalogo/:categoryName/:recipeName/:id"
import styles from "./index.module.scss";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/use-fetch";
import { useParams } from "react-router-dom";

const RecipesPage = () => {
  const params = useParams();
  const { categoryName, recipeName, id } = params;

  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);

  if (loading) {
    return "Caricamento...";
  }

  if (!data?.meals?.length) {
    return "Not found";
  }

  console.log("instruction:", data.meals[0]?.strInstructions);

  return (
    <div className={styles.RecipesPage}>
      <div className={styles.titles}>
        <h1 className={styles.categoryName}> Category: {categoryName}</h1>
        <h1 className={styles.recipeName}>{recipeName}</h1>
      </div>
      <div className={styles.instructionsCard}>
        <h1 className={styles.instructionsTitle}>INSTRUCTIONS:</h1>
        <p className={styles.Instructions}>{data.meals[0]?.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipesPage;
