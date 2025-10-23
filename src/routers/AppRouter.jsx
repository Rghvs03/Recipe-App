import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Chefs from "../components/Chefs";
import AddRecipes from "../components/AddRecipes";
import RecipeDetails from "../components/RecipeDetails";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/Add-recipe" element={<AddRecipes />} />
        <Route path="/Details/:name" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
