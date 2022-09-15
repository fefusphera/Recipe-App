import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const RecipeYouTube = () => {
  const recipe = useOutletContext();

  const link =
    recipe.meals[0].strYoutube?.replace?.("/watch?v=", "/embed/") ?? "";

  console.log(recipe.meals[0].strYoutube);

  return (
    <div className={styles.RecipeYoutube}>
      <h1 className={styles.RecipeTitle}>Video:</h1>
      <iframe
        className={styles.RecipeVideo}
        src={`${link}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
      />
    </div>
  );
};

export default RecipeYouTube;
