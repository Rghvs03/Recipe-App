import { CookingPotIcon } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../../ContextApi/MyContext";
import { useNavigate } from "react-router";

const AddRecipes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  let { recipes, setRecipes } = useContext(MyStore);

  const onSubmit = (data) => {
    let updatedRecipes = [...recipes, data];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-5 px-4 sm:px-8 md:px-12 lg:px-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-xl shadow-[#ff4a4a]/30 rounded-2xl p-4 sm:p-6 md:p-8"
        style={{ border: "2px solid #ff4a4a" }}
      >
        <h2 className="flex gap-2 justify-center items-center text-lg sm:text-xl md:text-2xl font-semibold text-[#ff4a4a] mb-5">
          <CookingPotIcon size={24} className="animate-bounce" />
          Add New Recipe
        </h2>

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block mb-2 text-[#ff4a4a] font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full px-3 py-2 border border-[#ff4a4a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff4a4a] text-gray-700"
            placeholder="e.g., Veg Biryani"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-[#ff4a4a]">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block mb-2 text-[#ff4a4a] font-medium">
            Image URL
          </label>
          <input
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="w-full px-3 py-2 border border-[#ff4a4a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff4a4a] text-gray-700"
            placeholder="Paste image link"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-[#ff4a4a]">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Cooking Time */}
        <div className="mb-4">
          <label className="block mb-2 text-[#ff4a4a] font-medium">
            Cooking Time
          </label>
          <input
            type="text"
            {...register("time", { required: "Time is required" })}
            className="w-full px-3 py-2 border border-[#ff4a4a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff4a4a] text-gray-700"
            placeholder="e.g., 1 Hour"
          />
          {errors.time && (
            <p className="mt-1 text-sm text-[#ff4a4a]">{errors.time.message}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block mb-2 text-[#ff4a4a] font-medium">
            Ingredients
          </label>
          <textarea
            rows={2}
            {...register("ingredients", {
              required: "Ingredients are required",
            })}
            className="w-full px-3 py-2 border border-[#ff4a4a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff4a4a] text-gray-700"
            placeholder="e.g., rice, onions, spices..."
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-[#ff4a4a]">
              {errors.ingredients.message}
            </p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <label className="block mb-2 text-[#ff4a4a] font-medium">
            Instructions
          </label>
          <textarea
            rows={2}
            {...register("instructions", {
              required: "Instructions are required",
            })}
            className="w-full px-3 py-2 border border-[#ff4a4a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff4a4a] text-gray-700"
            placeholder="e.g., Step by step instructions..."
          />
          {errors.instructions && (
            <p className="mt-1 text-sm text-[#ff4a4a]">
              {errors.instructions.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#ff4a4a] text-white font-semibold rounded shadow hover:bg-[#ff2222] transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipes;
