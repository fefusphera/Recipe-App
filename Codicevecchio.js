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
</div>;
