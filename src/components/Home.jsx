import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { MyStore } from "../../ContextApi/MyContext";
import { CookingPot } from "lucide-react";

const Home = () => {
  const { recipes } = useContext(MyStore);

  return (
    <div className="flex flex-wrap gap-5 justify-center p-8">
      {recipes.length ? (
        recipes.map((elem, i) => {
          return <RecipeCard elem={elem} key={i} />;
        })
      ) : (
        <div className="flex flex-col items-center gap-45">
          <h1 className="text-4xl font-bold flex justify-center text-[#ff4a4a] text-center">
            No Recipes For Now
          </h1>
          <CookingPot size={100} className="text-[#ff4a4a] animate-bounce" />

          <h1 className="text-4xl font-bold flex justify-center text-[#ff4a4a] text-center">
            Please Add a Recipe
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
