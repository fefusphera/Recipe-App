import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./pages/Navbar";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MealsPage from "./pages/MealsPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeIngredient from "./components/recipe-ingredients";
import RecipeInstructions from "./components/recipe-instructions";
import RecipeYouTube from "./components/recipe-youtube";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* la navbar va messa fuori dalle routes per rimanere in ogni pagina */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/catalogo/:categoryName" element={<MealsPage />} />
          <Route
            path="/catalogo/:categoryName/:recipeName/:id"
            element={<RecipesPage />}
          >
            <Route path="instructions" element={<RecipeInstructions />} />
            <Route path="youtube" element={<RecipeYouTube />} />
            <Route path="ingredients" element={<RecipeIngredient />} />
          </Route>
          <Route path="*" element={<ErrorPage status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
<App />
</BrowserRouter> */
}
