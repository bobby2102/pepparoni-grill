import React from "react";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import image from "../../assets/pizza/menu1.png";
import image2 from "../../assets/pizza/menu2.png";
import image3 from "../../assets/pizza/menu4.png";

export default function OurStory() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative w-full px-4 py-5 mx-auto space-y-5 max-w-7xl md:py-10">
      <h1 className="text-center text-orangeColor">A Culinary Journey</h1>

      <p className="text-justify text-blueColor">
        Pepperoni Grill, located at 9174 Wiles Rd, Coral Springs, FL, has carved
        out a reputation as a homey community hub where guests feel like family.
        Known for its exceptional NY-style pizzas, the restaurant offers a
        mouthwatering array of dishes, including grilled chicken sandwiches,
        traditional strombolis, and gluten-free options. The welcoming
        atmosphere reflects the passion of owner Michael and his dedicated team,
        ensuring top-notch service and quality. Diners rave about the fresh
        ingredients and perfect crust, particularly the Eggplant Parm Pizza.
        With catering services that impress even the most discerning palates,
        Pepperoni Grill is a must-visit for pizza lovers.
      </p>

      <div ref={container} className="relative">
        <StackedCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

const StackedCard = ({ scrollYProgress }) => {
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className="relative w-full">
      <div className="w-full ">
        {signatureBites.map((item, index) => (
          <motion.div
            className={`relative sticky top-0 flex flex-col items-center justify-center 
              p-6 pt-16 mt-5 overflow-hidden text-white bg-white shadow-2xl 
              max-w-7xl md:p-12 md:flex md:flex-row 
              ${item.useAlt ? "border-pattern-dark-bg" : "border-pattern"}`}
            style={{
              top: `calc(10vh + ${index * 25}px)`,
              backgroundColor: item.color,
              border: item.border,
            }}
            key={index}
          >
            <div className="absolute flex items-center justify-center w-12 h-12 font-semibold bg-white rounded-full shadow-md text-background top-3 left-3 md:top-6 md:left-6">
              {item.year}
            </div>
            {/* Text */}
            <div className="z-10 w-full mt-12 space-y-6 text-left">
              <h3 style={{ color: item.text }} className="font-bold">
                {item.title}
              </h3>
              <p style={{ color: item.text }}>{item.description}</p>
            </div>
            {/* Image */}
            {/* <div className="relative w-full mt-8 md:w-1/2 md:mt-0">
              <motion.img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-auto mx-auto"
              />
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const signatureBites = [
  {
    title: "The Story of CRISTIANOZ",
    year: "1990",
    description:
      "The Bigsurf Wave Board is an innovative and high-performance water sports equipment designed for riders looking to conquer the waves with style and agility. Crafted with advanced materials and cutting-edge maneuverability, making it suitable for riders of all skill levels.",
    image:
      "https://framerusercontent.com/images/8yU1Dy4QGqhwpevesSulAngcCMA.png",
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
  },
  {
    title: "Tradition, Innovation, Excellence",
    year: "2000",
    description:
      "The Bigsurf Wave Board is an innovative and high-performance water sports equipment designed for riders looking to conquer the waves with style and agility. Crafted with advanced materials and cuttingedge maneuverability, making it suitable for riders of all skill innovative and high-performance levels",
    image: image,
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
  },
  {
    title: "Tracing the History of Our Establishment",
    year: "2010",
    description:
      "The Bigsurf Wave Board is an innovative and high-performance water sports equipment designed for riders looking to conquer the waves with style and agility. Crafted with advanced materials and cutting-edge maneuverability, making it suitable for riders of all skill levels.",
    image: "https://framerusercontent.com/images/wPIdRCUwBMq8dwU6aAvLvL3mU.png",
    text: "#3778b0",
    color: "#FADC02",
    useAlt: false,
  },
  {
    title: "Honoring the Legacy of Our Restaurant",
    year: "2020",
    description:
      "The Bigsurf Wave Board is an innovative and high-performance water sports equipment designed for riders looking to conquer the waves with style and agility. Crafted with advanced materials and cuttingedge maneuverability, making it suitable for riders of all skill innovative and high-performance levels",
    image: image2,
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
  },
  {
    title: "Unveiling the History of Our Culinary Haven",
    year: "2024",
    description:
      "The Bigsurf Wave Board is an innovative and high-performance water sports equipment designed for riders looking to conquer the waves with style and agility. Crafted with advanced materials and cutting-edge maneuverability, making it suitable for riders of all skill levels.",
    image: image3,
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
  },
];
