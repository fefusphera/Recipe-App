import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
<App />
</BrowserRouter> */
}
