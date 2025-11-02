import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(
    () => JSON.parse(localStorage.getItem("recipes")) || []
  );


  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  return (
    <MyStore.Provider value={{ recipes, setRecipes }}>
      {children}
    </MyStore.Provider>
  );
};
