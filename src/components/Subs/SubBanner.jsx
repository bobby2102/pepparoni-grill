import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/pizza/chick.png";
import { Link } from "react-router-dom";

export default function SubBanner() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 overflow-hidden text-center bg-accent/50 sm:px-6 lg:px-8">
      <h2 className="mt-4 mb-2 text-orangeColor font-script">Original</h2>
      <h1 className="z-10 font-extrabold tracking-wide text-white">
        Chicken Parmigiana
      </h1>

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

      <Link
        target="_blank"
        to="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
        className="px-6 py-3 mt-10 text-lg font-bold text-white transition rounded-full shadow-lg bg-orangeColor/70 hover:bg-orangeColor"
      >
        Order Subs
      </Link>
    </div>
  );
}
