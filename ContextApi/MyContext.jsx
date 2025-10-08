import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(
    () => JSON.parse(localStorage.getItem("recipes")) || []
  );

  return (
    <MyStore.Provider value={{ recipes, setRecipes }}>
      {children}
    </MyStore.Provider>
  );
};
