import React, { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../../ContextApi/MyContext";

const RecipeDetails = () => {
  const { name } = useParams();
  const { recipes } = useContext(MyStore);

  const details = recipes.find((elem) => name === elem.title);

  return (
    <div
      className="
        w-[85vw] max-w-6xl bg-white rounded-3xl border-2 border-[#ff4a4a]
        shadow-xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden
        transition-shadow duration-300 hover:shadow-2xl
      "
    >
      {/* Image Section */}
      <div className="relative h-[300px] md:h-auto md:min-h-[450px] overflow-hidden">
        <img
          src={details?.image}
          alt={details?.title || "Recipe"}
          className="
            absolute top-0 left-0 w-full h-full object-cover
            transition-transform duration-500 hover:scale-105
            [will-change:transform]
          "
          draggable={false}
        />
      </div>

      {/* Details Section */}
      <div
        className="
          flex flex-col justify-between p-6 sm:p-10 bg-[#fff8f8]
        "
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#af1f1f] mb-4 border-b-2 border-[#ff4a4a] pb-2">
          {details?.title}
        </h1>

        {/* Time */}
        <div className="mb-6 flex items-center gap-3">
          <span
            className="
              bg-[#ffeded] text-[#af1f1f] text-sm sm:text-base font-semibold
              px-4 py-1 rounded-full shadow-sm
              hover:bg-[#ffdede] transition-all duration-200
            "
          >
            Cooking Time
          </span>
          <span className="text-lg sm:text-xl text-[#ff4a4a] italic font-medium">
            {details?.time}
          </span>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2 text-[#ff4a4a]">
            Ingredients
          </h4>
          <div
            className="
              text-gray-700 text-base px-4 py-3 max-h-44 overflow-y-auto rounded-xl
              bg-[#fff7f7] shadow-sm leading-relaxed
              scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] scrollbar-thumb-rounded-full
              hover:shadow-md transition-shadow duration-150
            "
          >
            {details?.ingredients || "No ingredients provided."}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h4 className="text-xl font-semibold mb-2 text-[#ff4a4a]">
            Instructions
          </h4>
          <div
            className="
              text-gray-700 text-base px-4 py-3 max-h-56 overflow-y-auto rounded-xl
              bg-[#fff7f7] shadow-sm leading-relaxed
              scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] scrollbar-thumb-rounded-full
              hover:shadow-md transition-shadow duration-150
            "
          >
            {details?.instructions || "No instructions provided."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
