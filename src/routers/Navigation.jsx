import { CookingPot, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ff4a4a] text-white p-3 px-8 rounded-b-lg">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-3xl font-semibold">
          <CookingPot className="animate-bounce" size={30} />
          Recipes
        </h1>
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75" : null
            }
            to={"/"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75" : null
            }
            to={"/Chefs"}
            end
          >
            Chefs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75" : null
            }
            to={"/Add-recipe"}
            end
          >
            Add-Recipes
          </NavLink>
        </div>
        <button className="hidden md:flex items-center gap-2 text-2xl font-semibold cursor-pointer hover:">
          SignUp
        </button>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col md:hidden mt-3 gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75 py-1" : "py-1"
            }
            to={"/"}
            end
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75 py-1" : "py-1"
            }
            to={"/Chefs"}
            end
            onClick={() => setMenuOpen(false)}
          >
            Chefs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-white duration-75 py-1" : "py-1"
            }
            to={"/Add-recipe"}
            end
            onClick={() => setMenuOpen(false)}
          >
            Add-Recipes
          </NavLink>
          {/* <NavLink
            className="py-1 text-xl font-semibold"
            to={"/signup"}
            onClick={() => setMenuOpen(false)}
          >
            SignUp
          </NavLink> */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
