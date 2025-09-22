import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/carousel/Hero44B.jpg"; // replace with your actual background image
import { FaPizzaSlice } from "react-icons/fa";

export default function PizzaBottom() {
  return (
    <section
      className="relative w-full h-[90vh]  flex items-center justify-center text-center bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h3 className="font-bold text-accent">
          Always Delivers Hot, <br /> Fast, and Delicious
        </h3>

        {/* Description */}

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <motion.a
            href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-semibold transition border-2 rounded-full text-accent bg-blueColor border-blueColor "
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.a>

          <motion.a
            href="/our-menu"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-semibold transition border-2 rounded-full text-blueColor border-accent bg-accent "
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Menu
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
