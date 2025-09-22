import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../../assets/carousel/Hero44B.jpg";
import image2 from "../../assets/home/image1.png";
import image3 from "../../assets/home/chickenParmigiana.png";
import image4 from "../../assets/home/bakedZiti.png";

const packages = [
  {
    id: 1,
    title: "Option One",
    price: "$13",
    description: [
      "Baked Ziti",
      "Meatball Marinara",
      "Garden Salad w/ Balsamic Vinaigrette",
      "Garlic Rolls",
    ],
    image: image1,
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
  },
  {
    id: 2,
    title: "Option Two",
    price: "$18",
    description: [
      "Chicken Entree (Francese, Marsala, or Piccata)",
      "Pasta Dish (Alla Vodka, Primavera, or Chicken & Broccoli)",
      "Garden Salad w/ Balsamic Vinaigrette",
      "Garlic Rolls",
    ],
    image: image2,
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
  },
  {
    id: 3,
    title: "Option Three",
    price: "$22",
    description: [
      "Same as Option 2",
      "plus Eggplant Parmigiana or Eggplant Rollatini",
    ],
    image: image3,
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
  },
  {
    id: 4,
    title: "Option Four",
    price: "$24",
    description: [
      "Any Chicken Entree",
      "Any Pasta",
      "Eggplant Parmigiana",
      "Meatball Marinara",
      "Garden Salad",
      "Garlic Rolls",
    ],
    image: image4,
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
  },
];

export default function Packages({ scrollToContact }) {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div className="relative w-full py-16">
      {/* Section Heading */}
      <motion.h1
        className="mb-4 text-center text-orangeColor"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Packages
      </motion.h1>

      <div className="grid w-full place-content-center ">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            className={`relative sticky top-0 flex flex-col items-center justify-center 
              p-6 pt-16 mt-5 overflow-hidden text-white bg-white shadow-2xl 
              max-w-7xl md:p-12 md:flex md:flex-row 
              `}
            style={{
              top: `calc(15vh + ${index * 40}px)`,
              backgroundColor: pkg.color,
              border: pkg.border,
            }}
          >
            {/* Price Badge */}
            <div className="absolute px-4 py-2 font-bold text-black bg-white rounded-full shadow-md top-6 right-6 md:left-6 w-fit">
              {pkg.price} / person
            </div>

            {/* Text Section */}
            <div className="z-10 w-full space-y-4 md:w-1/2">
              <h3 className="font-bold" style={{ color: pkg.text }}>
                {pkg.title}
              </h3>
              <ul
                className="space-y-1 list-disc list-inside"
                style={{ color: pkg.text }}
              >
                {pkg.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="py-4">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-2 text-sm font-semibold transition border rounded-full"
                  style={{
                    color: pkg.text,
                    borderColor: pkg.text,
                  }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center w-full px-2 mt-6 md:mt-0 md:w-1/2 ">
              <motion.img
                src={pkg.image}
                alt={pkg.title}
                className="object-contain w-full h-full shadow-lg rounded-xl"
                style={{ scale: imageScale }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
