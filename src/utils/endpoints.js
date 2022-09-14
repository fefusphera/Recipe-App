export const ENDPOINTS = {
  BASE: `https://www.themealdb.com/api/json/v1/1`,
  get SEARCH() {
    return `${this.BASE}/search.php`;
  },
  get FILTER() {
    return `${this.BASE}/filter.php`;
  },
  get CATEGORIES() {
    return `${this.BASE}/categories.php`;
  },
  get DETEAIL() {
    return `${this.BASE}/lookup.php`;
  },
};

//---DOCUMENTAZIONE MEAL DB

// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//BASE + / + SEARCH.PHP + ?s={nome piatto}

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

//BASE + / + FILTER.PHP + ?i={nome main ingredient}

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php

//BASE + /CATEGORIES.PHP

//Singola ricetta
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

//BASE + /LOOKUP.PHP ?i={id ricetta}

//CATEGORY

// {
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
//     },

//MEALS

// {
//     "strMeal": "Ayam Percik",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
//     "idMeal": "53050"
//     },
