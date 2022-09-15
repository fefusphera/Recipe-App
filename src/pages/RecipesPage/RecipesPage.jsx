//singola ricetta:
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// path="/catalogo/:categoryName/:recipeName/:id"
import styles from "./index.module.scss";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/use-fetch";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

const RecipesPage = () => {
  const params = useParams();
  const { categoryName, recipeName, id } = params;

  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);

  const recipe = data;
  // console.log(recipe);

  if (loading) {
    return "Caricamento...";
  }

  if (!data?.meals?.length) {
    return "Not found";
  }

  // console.log("instruction:", data.meals[0]?.strInstructions);

  const tabs = [
    { label: "Recipe", path: "./instructions" },
    { label: "Ingredients", path: "./ingredients" },
    { label: "YouTube", path: "./youtube" },
  ];

  return (
    <div className={styles.RecipesPage}>
      <Link to={`/catalogo/${categoryName}`} className={styles.CategoryLink}>
        {categoryName}
      </Link>
      <div className={styles.titles}>
        {/* <h1 className={styles.categoryName}> Category: {categoryName}</h1> */}
        <h1 className={styles.recipeName}>{recipeName}</h1>
      </div>
      <img
        className={styles.RecipeImg}
        src={data.meals[0]?.strMealThumb}
        alt={recipeName}
      />

      <ul className={styles.navTab}>
        {tabs.map(({ label, path }) => (
          <li className={styles.navItem} key={path}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.link_active}` : styles.link
              }
              to={path}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet context={recipe} />
    </div>
  );
};

export default RecipesPage;
