import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const RecipeYouTube = () => {
  const recipe = useOutletContext();
  const { strYoutube } = recipe;
  const link = strYoutube?.replace?.("/watch?v=", "/embed/") ?? "";
  return (
    <div className="RecipeYoutube">
      <h1>Basta Ciao</h1>
    </div>
  );
};

export default RecipeYouTube;
