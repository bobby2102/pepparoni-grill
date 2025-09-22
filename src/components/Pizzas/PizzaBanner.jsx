import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/pizza/menu1.png";
import { Link } from "react-router-dom";
import bg from "../../assets/bgMain.jpeg";
import border from "../../assets/border.png";

export default function PizzaBanner() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="relative flex flex-col items-center justify-center min-h-screen py-8 overflow-hidden ">
        {/* Headings */}
        <h1 className="mt-4 mb-2 text-accent ">Original</h1>
        <h1 className="z-10 font-extrabold tracking-wide text-white">
          ITALIAN
        </h1>

        {/* Rotating Pizza */}
        <div className="relative w-[70vw] h-[35vw] overflow-hidden mt-6">
          <motion.img
            src={image1}
            alt="Italian Pizza"
            className="w-[70vw] h-[70vw] absolute -top-[35vw] left-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          />
        </div>

        {/* Order Button */}
        <Link
          target="_blank"
          to="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
          className="px-6 py-3 mt-10 text-lg font-bold transition rounded-full shadow-lg text-blueColor bg-accent "
        >
          Order Pizza & Sub
        </Link>

        {/* Border Image at bottom */}
        <div className="absolute bottom-0 block w-full md:hidden">
          <img
            src={border}
            alt="decorative border"
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}
