import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../../assets/whitebg.png";
import borderImage from "../../assets/border.png";

const menuData = {
  Appetizers: [
    {
      name: "Pepperoni Sticks with Marinara",
      price: "$30/$50",
      description:
        "Bread sticks stuffed with pepperoni, brushed with garlic and oil and sprinkled with Parmesan cheese, served with a marinara dipping sauce.",
      image: "",
    },
    {
      name: "Grilled Vegetable Napoleon",
      price: "$65/$130",
      description:
        "Grilled portobello mushrooms, zucchini, squash and eggplant layered with melted fresh mozzarella; balsamic glaze.",
      image: "",
    },
    {
      name: "Stuffed Mushrooms with Crabmeat",
      price: "$75/$150",
      description:
        "Jumbo mushrooms stuffed with a blend of crabmeat, bread crumbs and herbs baked in a tasty white wine and butter sauce.",
      image: "",
    },
    {
      name: "Clams Oreganata",
      price: "$70/$140",
      description:
        "Fresh clams topped with seasoned breadcrumbs, drizzled with olive oil and baked to a golden brown.",
      image: "",
    },
    {
      name: "Bruschetta",
      price: "$55/$110",
      description:
        "Marinated diced plum tomatoes and fresh mozzarella served over toasted Italian bread.",
      image: "",
    },
  ],

  Salads: [
    {
      name: "Classic Garden Salad",
      price: "$30/$60",
      description:
        "A medley of greens, tomato, cucumber, carrot and red onion.",
      image: "",
    },
    {
      name: "Chopped Antipasto",
      price: "$60/$120",
      description:
        "Roasted peppers, marinated mushrooms, plum tomato, kalamata olives, ham, salami and pepperoni tossed with cheese.",
      image: "",
    },
    {
      name: "Greek Salad",
      price: "$45/$85",
      description:
        "Crumbled feta cheese, kalamata olives, pepperoncini over garden salad.",
      image: "",
    },
    {
      name: "Caesar Salad",
      price: "$30/$60",
      description:
        "Romaine lettuce, parmesan cheese and croutons with Caesar dressing.",
      image: "",
    },
  ],

  Pasta: [
    {
      name: "Baked Ziti Alla Romano",
      price: "$40/$80",
      description:
        "Ziti tossed in a blend of marinara and ricotta cheese and baked with mozzarella.",
      image: "",
    },
    {
      name: "Lasagna",
      price: "$70/$140",
      description:
        "Layered high with sliced meatballs, Italian sausage and cheeses.",
      image: "",
    },
    {
      name: "Pasta Marinara",
      price: "$35/$70",
      description:
        "Light and flavorful sauce with ripe plum tomatoes, olive oil, garlic and fresh basil.",
      image: "",
    },
    {
      name: "Sausage Marinara",
      price: "$65/$125",
      description: "Marinara sauce with sweet Italian sausage.",
      image: "",
    },
    {
      name: "Sausage, Peppers and Onions",
      price: "$65/$125",
      description: "Sausage, peppers and onions in a light marinara sauce.",
      image: "",
    },

    {
      name: "Pasta Alfredo",
      price: "$60/$120",
      description: "Silky smooth blend of cream and parmesan cheese.",
      image: "",
    },
  ],

  Seafood: [
    {
      name: "Shrimp Parmigiana",
      price: "$80/$160",
      description: "Breaded shrimp baked with marinara and mozzarella cheese.",
      image: "",
    },
    {
      name: "Baked Stuffed Shrimp",
      price: "$90/$180",
      description:
        "Large shrimp baked and stuffed with crabmeat and herbs in cream sauce.",
      image: "",
    },
    {
      name: "Shrimp Francese",
      price: "$80/$160",
      description:
        "Large shrimp sautéed in lemon butter white wine sauce with pasta.",
      image: "",
    },
  ],

  Chicken: [
    {
      name: "Chicken Parmigiana",
      price: "$85/$170",
      description:
        "Boneless chicken breast breaded and baked with marinara sauce and mozzarella.",
      image: "",
    },
    {
      name: "Chicken Marsala",
      price: "$85/$170",
      description:
        "Chicken breast sautéed with shallots, mushrooms and Marsala wine.",
      image: "",
    },
    {
      name: "Chicken Francese",
      price: "$85/$170",
      description:
        "Chicken breast battered and sautéed in white wine, lemon, butter sauce.",
      image: "",
    },
  ],

  Grilled: [
    {
      name: "Grilled Rosemary Chicken over Sauteed Spinach",
      price: "$70/$140",
      description: "Rosemary chicken over sautéed spinach.",
      image: "",
    },
    {
      name: "Chicken Picatta",
      price: "$85/$170",
      description:
        "Chicken breast with artichoke hearts in white wine lemon butter sauce.",
      image: "",
    },
    {
      name: "Chicken Cacciatore",
      price: "$85/$170",
      description:
        "Chicken breast with mushrooms, peppers, onion in rosemary sauce.",
      image: "",
    },
  ],

  SideDishes: [
    {
      name: "Grilled Vegetables",
      price: "$60/$120",
      description: "Grilled seasonal vegetables.",
      image: "",
    },
    {
      name: "Sautéed Vegetables",
      price: "$35/$70",
      description: "Lightly seasoned sautéed vegetables.",
      image: "",
    },
    {
      name: "Roasted Rosemary Potatoes",
      price: "$30/$60",
      description: "Oven-roasted potatoes with rosemary.",
      image: "",
    },
    {
      name: "Garlic Rolls",
      price: "$13/$26",
      description: "Freshly baked garlic rolls.",
      image: "",
    },
  ],

  Eggplant: [
    {
      name: "Eggplant Parmigiana",
      price: "$60/$120",
      description: "Thinly sliced eggplant baked with marinara and mozzarella.",
      image: "",
    },
    {
      name: "Eggplant Rollatini",
      price: "$65/$130",
      description:
        "Eggplant filled with spinach, ricotta and romano cheese, baked with marinara and mozzarella.",
      image: "",
    },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Appetizers");

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full px-6 py-24 mx-auto max-w-7xl ">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-blueColor">Our Menu</h1>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          <div className="flex px-2 space-x-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-center">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex-shrink-0 snap-center px-5 py-2 rounded-full font-semibold transition-all duration-300 border border-primary/20
          ${
            activeTab === category
              ? "bg-primary text-white"
              : "bg-light text-black"
          }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-16 md:grid-cols-2"
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                className="relative p-6 overflow-hidden bg-white shadow-md group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {/* Top decorative border */}
                <img
                  src={borderImage}
                  alt="decorative border"
                  className="absolute top-0 left-0 w-full rotate-180 pointer-events-none"
                />
                {/* Bottom decorative border */}
                <img
                  src={borderImage}
                  alt="decorative border"
                  className="absolute bottom-0 left-0 w-full pointer-events-none"
                />

                <div className="relative flex flex-col items-center space-y-2 text-center">
                  {/* Dish name */}
                  <h3 className="text-2xl leading-snug text-blueColor">
                    {item.name}
                  </h3>

                  {/* Price bubble */}
                  <span className="px-3 py-1 text-sm font-bold rounded-full shadow-md text-accent bg-blueColor">
                    {item.price}
                  </span>

                  {/* Description */}
                  <p className="max-w-md mt-2 text-base font-medium leading-relaxed text-blueColor">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
