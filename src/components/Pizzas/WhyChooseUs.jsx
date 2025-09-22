import React from "react";
import {
  FaLeaf,
  FaPizzaSlice,
  FaThumbsUp,
  FaMusic,
  FaUtensils,
} from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLeaf className="text-4xl text-accent" />,
      title: "Always Serve Fresh Food",
      desc: "Perfectly portioned ingredients.",
    },
    {
      icon: <LuChefHat className="text-4xl text-accent" />,
      title: "We Have Popular Masterchef",
      desc: "The patient staff reflects the style.",
    },
    {
      icon: <FaPizzaSlice className="text-4xl text-accent" />,
      title: "Delicious Pizza Recipes",
      desc: "Best crust with this good recipe.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-accent" />,
      title: "Maintaining The Quality of Food",
      desc: "Standardized food recipes for menu.",
    },
    {
      icon: <FaMusic className="text-4xl text-accent" />,
      title: "Best Live Music Restaurants",
      desc: "Beautiful natural & serene ambience.",
    },
    {
      icon: <FaUtensils className="text-4xl text-accent" />,
      title: "Wonderful Dining Experience",
      desc: "A memorable dining atmosphere.",
    },
  ];

  return (
    <section className="py-20 bg-blueColor/10">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-wide uppercase text-accent">
          Why Choose Us?
        </h1>
        <h3 className="text-2xl font-semibold text-blueColor">
          We Are Known For
        </h3>
      </div>

      {/* Features Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 text-center transition bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blueColor/20">
              {item.icon}
            </div>
            <h4 className="mb-2 text-lg font-bold text-blueColor">
              {item.title}
            </h4>
            <p className="text-sm text-accent/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
