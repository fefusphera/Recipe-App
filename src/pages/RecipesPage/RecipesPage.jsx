//singola ricetta:
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// path="/catalogo/:categoryName/:recipeName/:id"

import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/use-fetch";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const RecipesPage = () => {
  const params = useParams();
  const { categoryName, recipeName, id } = params;
  // const [instruction, setInstruction] = useState("");

  // const instruction = data.meals[0]?.strInstructions;
  // .then((data) => setInstruction(data.meals[0].setInstruction));

  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);

  if (loading || !data.meals.length) {
    return "Caricamento...";
  }

  if (!data?.meals?.length) {
    return "Not found";
  }
  // setInstruction(data.meals[0]?.strInstructions);

  // console.log("data>>>", data);
  console.log("instruction:", data.meals[0]?.strInstructions);
  // console.log(instruction);

  // const formatRecipe = (data) => {
  //   const initialRecipe = data.meals?.at(0);

  //   return {
  //     name: initialRecipe.strMeal,
  //     id: initialRecipe.idMeal,
  //     youtubeUrl: initialRecipe.strYoutube,
  //     thumbnailSrc: initialRecipe.strMealThumb,
  //     tags: initialRecipe.strTags,
  //     instructions: initialRecipe.strInstructions,
  //   };
  // };

  return (
    <div>
      <h1>
        {categoryName} - {recipeName}
      </h1>
      <div>
        <h1>INSTRUCTIONS:</h1>
        <p>{data.meals[0]?.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipesPage;
