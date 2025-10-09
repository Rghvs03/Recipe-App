import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { MyStore } from "../../ContextApi/MyContext";
import { CookingPot } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const { recipes } = useContext(MyStore);

  let navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-5 justify-center p-8">
      {recipes.length ? (
        recipes.map((elem, i) => {
          return <RecipeCard elem={elem} key={i} />;
        })
      ) : (
        <div className="flex flex-col items-center gap-23.5">
          <h1 className="text-4xl font-bold flex justify-center text-[#ff4a4a] text-center">
            Let’s Cook Something New!
          </h1>
          <CookingPot size={100} className="text-[#ff4a4a] animate-bounce" />

          <button
            onClick={() => navigate("/Add-recipe")}
            className="bg-[#ff4a4a] text-white text-xl font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#e84343] transition-colors duration-200 flex justify-center items-center mx-auto cursor-pointer"
          >
            Add Recipe
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
