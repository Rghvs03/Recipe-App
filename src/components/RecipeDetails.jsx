import React, { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../../ContextApi/MyContext";

const RecipeDetails = () => {
  const { name } = useParams();

  let { recipes } = useContext(MyStore);

  let details = recipes.find((elem) => name === elem.title);
  console.log(details);

  return (
    <div
      className="
  w-[80vw] max-w-5xl bg-white rounded-t-2xl border-2 border-[#ff4a4a]
  shadow-lg mx-auto my-8 flex flex-col overflow-hidden
  transition-shadow duration-300 hover:shadow-2xl
"
    >
      <div className="w-full h-[32vw] max-h-[340px] min-h-[150px] relative overflow-hidden">
        <img
          src={details?.image}
          alt={details?.title || "Recipe"}
          className="
        absolute top-0 left-0 w-full h-full object-cover
        transition-transform duration-300
        hover:scale-105
        [will-change:transform]
      "
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
          draggable={false}
        />
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-7">
        <span className="text-2xl sm:text-3xl font-bold text-[#af1f1f] mb-4 truncate transition-colors duration-200 hover:text-[#ff4a4a]">
          {details?.title}
        </span>
        <div className="mb-4 flex items-center gap-2">
          <span className="bg-[#ffeded] text-[#af1f1f] text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow transition-all duration-150 hover:bg-[#ffdede]">
            Time
          </span>
          <span className="text-base sm:text-lg text-[#ff4a4a] italic font-medium">
            {details?.time}
          </span>
        </div>
        <h4 className="text-lg font-semibold mb-2 text-[#ff4a4a]">
          Ingredients
        </h4>
        <div
          className="
      text-gray-700 text-base mb-5 px-3 py-2 max-h-32 overflow-y-auto rounded-lg
      bg-[#fff7f7] shadow-sm break-words
      scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] scrollbar-thumb-rounded-full
      hover:shadow-md transition-shadow duration-150
    "
        >
          {details?.ingredients}
        </div>
        <h4 className="text-lg font-semibold mb-2 text-[#ff4a4a]">
          Instructions
        </h4>
        <div
          className="
      text-gray-700 text-base px-3 py-2 mb-2 max-h-40 overflow-y-auto rounded-lg
      bg-[#fff7f7] shadow-sm break-words
      scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] scrollbar-thumb-rounded-full
      hover:shadow-md transition-shadow duration-150
    "
        >
          {details?.instructions}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
