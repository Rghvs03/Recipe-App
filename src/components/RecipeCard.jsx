import React from "react";
import { MyStore } from "../../ContextApi/MyContext";
import { useNavigate } from "react-router";

const RecipeCard = ({ elem }) => {

 let navigate =  useNavigate();

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#ff4a4a] flex flex-col mx-4 my-3">
      <div className="relative w-full pb-[60%] bg-gray-50">
        <img
          src={elem.image}
          alt={elem.title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="text-xl font-bold text-[#af1f1f] mb-1 truncate underline decoration-[#ffe6e6] decoration-2">
          {elem.title}
        </h3>
        <h4 className="text-base font-medium mb-2 text-[#ff4a4a]">
          Ingredients:
        </h4>
        <div className="max-h-16 overflow-y-auto break-words hide-scrollbar text-gray-700 text-sm mb-4 px-2">
          {elem.ingredients}
        </div>

        <div className="mb-2 flex items-center gap-3">
          <span className="inline-block bg-[#ffeded] text-[#af1f1f] text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
            Cooking Time
          </span>
          <span className="text-sm text-[#d13a3a] font-medium italic">
            {elem.time}
          </span>
        </div>

        <div className="mt-auto flex gap-2">
          <button onClick={()=> navigate(`/Details/${elem.title}`)  } className="flex-1 bg-[#ff4a4a] py-2 rounded-xl text-white font-semibold hover:bg-[#d13a3a] transition shadow">
            Explore Now
          </button>
          <button className="flex-1 bg-gray-100 py-2 rounded-xl text-[#ff4a4a] border border-[#ff4a4a] font-semibold hover:bg-[#ffe6e6] transition shadow">
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
