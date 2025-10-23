import { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../../ContextApi/MyContext";
import { FaClock, FaUtensils, FaListUl, FaInfoCircle } from "react-icons/fa";

const RecipeDetails = () => {
  const { name } = useParams();
  const { recipes } = useContext(MyStore);

  const details = recipes.find((elem) => name === elem.title);

  if (!details)
    return (
      <div className="flex items-center justify-center h-screen text-[#af1f1f] font-semibold text-2xl">
        Recipe not found.
      </div>
    );

  return (
    <div className="w-[90vw] max-w-6xl mx-auto my-10 bg-white border border-[#ff4a4a]/30 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Header Image with Overlay */}
      <div className="relative h-[350px] md:h-[480px] overflow-hidden">
        <img
          src={details.image}
          alt={details.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-md mb-2">
            {details.title}
          </h1>
          <div className="flex items-center gap-3 text-lg">
            <FaClock className="text-[#ffeded]" />
            <p>{details.time}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[#fff8f8]">
        {/* Ingredients */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#ff4a4a] mb-2">
            <FaListUl />
            <h2 className="text-2xl font-semibold">Ingredients</h2>
          </div>
          <div className="bg-[#fff7f7] rounded-xl shadow-sm p-4 h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] hover:shadow-md transition-shadow duration-200 text-gray-700 leading-relaxed">
            {details.ingredients || "No ingredients provided."}
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#ff4a4a] mb-2">
            <FaInfoCircle />
            <h2 className="text-2xl font-semibold">Instructions</h2>
          </div>
          <div className="bg-[#fff7f7] rounded-xl shadow-sm p-4 h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ff4a4a] scrollbar-track-[#ffeded] hover:shadow-md transition-shadow duration-200 text-gray-700 leading-relaxed">
            {details.instructions || "No instructions provided."}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-5 bg-[#ffeded]">
        <div className="flex items-center gap-3 text-[#af1f1f]">
          <FaUtensils className="text-2xl" />
          <span className="font-semibold tracking-wide text-lg">
            Ready to serve!
          </span>
        </div>
        <button
          className="mt-4 sm:mt-0 px-6 py-2 bg-[#ff4a4a] text-white font-medium rounded-full shadow-md hover:bg-[#af1f1f] transition-all duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
