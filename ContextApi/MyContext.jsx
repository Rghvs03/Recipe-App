import { LoaderPinwheelIcon } from "lucide-react";
import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        {" "}
        <LoaderPinwheelIcon size={28} className="animate-spin" />{" "}
      </div>
    ); // Or render a loading spinner
  }

  return (
    <MyStore.Provider value={{ recipes, setRecipes }}>
      {children}
    </MyStore.Provider>
  );
};
