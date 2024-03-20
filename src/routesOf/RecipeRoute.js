import React from "react";
import { Routes, Route } from "react-router-dom";
import MealsAcCat from "../api/MealsAcCat";
import FinalRecipe from "../api/FinalRecipe";
import RecipieExample from "../api/RecipieExample";
const RecipeRoute = () => {
  return (
    <div>
      <Routes>
        {/* home page for recipe */}
        <Route path="/category" element={<RecipieExample />} />

        <Route path="/category/:categoryName" element={<MealsAcCat />} />
        <Route path="/category/:categoryName/id" element={<FinalRecipe />} />
      </Routes>
    </div>
  );
};

export default RecipeRoute;
