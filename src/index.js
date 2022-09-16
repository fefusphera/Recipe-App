import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MealsPage from "./pages/MealsPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeIngredient from "./components/recipe-ingredients";
import RecipeInstructions from "./components/recipe-instructions";
import RecipeYouTube from "./components/recipe-youtube";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "./utils/endpoints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalogo",
        element: <CatalogPage />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: "/catalogo/:categoryName",
        children: [
          {
            path: "",
            element: <MealsPage />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <RecipesPage />,
            children: [
              {
                path: "instructions",
                element: <RecipeInstructions />,
              },
              {
                path: "ingredients",
                element: <RecipeIngredient />,
              },
              {
                path: "youtube",
                element: <RecipeYouTube />,
              },
            ],
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.DETEAIL}?i=${params?.id}`);
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
