import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Chefs from "../components/Chefs";
import AddRecipes from "../components/AddRecipes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/Add-recipe" element={<AddRecipes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
