import React, { useState } from "react";
import image from "../../assets/carousel/Italian-9.jpg";
import image2 from "../../assets/carousel/deluxepizza-47.jpg";
import image3 from "../../assets/carousel/pepperoni-56.jpg";
import image4 from "../../assets/items/tortelliniFresca-19.jpg";
import image5 from "../../assets/items/stuffedshells-39.jpg";
import image6 from "../../assets/items/Tuscanspinachsalad-51.jpg";

import bg from "../../assets/whitebg.png";

const data = {
  categories: [
    "All",
    "Desserts",
    "Italian",
    "Mexican",
    "Pizza & Fast Food",
    "Sea Food",
  ],
  blogs: [
    {
      id: 1,
      image: image,
      date: "5 APR, 2024",
      category: "Italian",
      title: "Discovering Deliciousness, One Recipe at a Time",
      description:
        "Discovering Deliciousness, One Recipe at a Time invites you on a culinary journey filled with tantalizing flavors, aromas...",
    },
    {
      id: 2,
      image: image2,
      date: "5 APR, 2024",
      category: "Pizza & Fast Food",
      title: "Indulge in Delicious Creations",
      description:
        "Indulge in delicious creations that tantalize your taste buds and transport you to a world of culinary delight...",
    },
    {
      id: 3,
      image: image3,
      date: "5 APR, 2024",
      category: "Pizza & Fast Food",
      title: "Painting Palates with Flavorful Delights",
      description:
        "From mouthwatering pizzas to crispy sides, this is a treat for your taste buds...",
    },
    {
      id: 4,
      image: image4,
      date: "5 APR, 2024",
      category: "Desserts",
      title: "Stories Behind the Dishes We Love",
      description:
        "Every dish has a story, and desserts tell tales of sweetness and tradition...",
    },
    {
      id: 5,
      image: image5,
      date: "6 APR, 2024",
      category: "Mexican",
      title: "Savoring the Spice of Mexico",
      description:
        "Dive into rich Mexican cuisine — tacos, enchiladas, and salsas that bring bold flavors alive...",
    },
    {
      id: 6,
      image: image6,
      date: "7 APR, 2024",
      category: "Sea Food",
      title: "Ocean’s Bounty on Your Plate",
      description:
        "Fresh seafood delicacies that capture the essence of the ocean with every bite...",
    },
  ],
};

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? data.blogs
      : data.blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 gap-10 px-4 py-10 mx-auto max-w-7xl md:grid-cols-4">
      {/* Categories */}
      <div className="space-y-8 md:col-span-1">
        <div>
          <h3 className="mb-3 font-bold text-blueColor">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            {data.categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer ${
                  selectedCategory === cat ? "text-black font-semibold" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="relative flex flex-col p-6 overflow-hidden shadow-md rounded-xl"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Content */}
              <div className="relative flex flex-col h-full">
                {/* Blog Image */}
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full transition-transform duration-500 rounded-lg h-60 hover:scale-105"
                  />
                </div>

                <p className="mb-1 text-sm text-blueColor">
                  {blog.date} • {blog.category}
                </p>

                <h4 className="mb-2 text-lg font-bold text-blueColor">
                  {blog.title}
                </h4>

                <p className="flex-grow mb-3 text-gray-700">
                  {blog.description}
                </p>

                <a
                  href="/view-blogs"
                  className="px-4 py-2 mt-auto transition duration-300 border rounded-md text-blueColor bg-accent border-accent w-fit"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
