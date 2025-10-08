import React from "react";
import Navigation from "./routers/Navigation";
import AppRouter from "./routers/AppRouter";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  return (
    <div>
      <Navigation/>
      <AppRouter/>
     
    </div>
  );
};

export default App;
