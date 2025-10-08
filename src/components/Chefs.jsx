import { ChefHat } from "lucide-react";
import React from "react";

const chefs = [
  {
    name: "Vikas Khanna",
    image:
      "https://pimwp.s3-accelerate.amazonaws.com/2023/02/the-incredible-and-inspirational-story-of-vikas-khanna-1400x653-1521115740.jpg",
    specialty: "Michelin-Starred Indian Cuisine",
    experience: "20+ years",
    awards: "Author & MasterChef Judge",
  },
  {
    name: "Maneet Chauhan",
    image:
      "https://www.seema.com/wp-content/uploads/2021/11/Maneet-Chauhan.jpg",
    specialty: "Modern Progressive Indian",
    experience: "10+ years",
    awards: "India’s Top Chef 2025",
  },
  {
    name: "Sanjeev Kapoor",
    image:
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2022-08/Sanjeev-Kapoor.JPG",
    specialty: "Fusion & Television Chef",
    experience: "30+ years",
    awards: "Padma Shri Awardee",
  },
];

const Chefs = () => {
  return (
    <div className="flex flex-col items-center w-full px-2 py-6 min-h-screen bg-white">
      <div className="flex mb-6 justify-center items-center w-full">
        <ChefHat className="text-[#ff4a4a] mr-2 animate-bounce" size={32} />
        <h2 className="text-xl sm:text-2xl font-bold text-[#af1f1f]">
          Our Top Chefs
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {chefs.map((chef, idx) => (
          <div
            key={idx}
            className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#ff4a4a] flex flex-col mx-2 my-3"
          >
            <div className="relative w-full pb-[60%] bg-gray-50">
              <img
                src={chef.image}
                alt={chef.name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#af1f1f] mb-1 truncate underline decoration-[#ffe6e6] decoration-2">
                {chef.name}
              </h3>
              <div className="mb-2 flex items-center gap-2">
                <span className="bg-[#ffeded] text-[#af1f1f] text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  Speciality
                </span>
                <span className="text-sm text-[#d13a3a] font-medium italic">
                  {chef.specialty}
                </span>
              </div>
              <div className="mb-1">
                <span className="text-sm text-gray-700 font-semibold">
                  Experience:{" "}
                </span>
                <span className="text-sm text-gray-800">{chef.experience}</span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-700 font-semibold">
                  Awards:{" "}
                </span>
                <span className="text-sm text-gray-800">{chef.awards}</span>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-[#ff4a4a] py-2 rounded-xl text-white font-semibold hover:bg-[#d13a3a] transition shadow">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
