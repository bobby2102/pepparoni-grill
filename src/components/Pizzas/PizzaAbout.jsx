import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/pizza/margarita-60.jpg";

export default function PizzaAbout() {
  return (
    <section className="container flex flex-col items-center justify-between w-full gap-12 px-6 py-16 mx-auto md:flex-row">
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={image1}
          alt="Pizza About"
          className="object-cover w-full h-auto shadow-lg rounded-xl"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="w-full text-center md:w-1/2 md:text-left"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="mb-6 text-blueColor">Pizzas at Pepperoni Grill</h1>
        <p className="mb-4 leading-relaxed text-gray-700">
          At Pepperoni Grill, we believe pizza is more than just food – it’s an
          experience. Every pizza we make is handcrafted with love, using only
          the freshest ingredients, rich sauces, and bubbling cheese baked to
          golden perfection.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          From timeless classics to bold new flavors, every bite is designed to
          create moments of joy, meant to be shared with friends and family.
          Step into our world of flavor and discover why Pepperoni Grill pizzas
          are truly unforgettable.
        </p>

        <motion.a
          href="/our-menu"
          rel="noopener noreferrer"
          className="px-6 py-2 text-sm font-semibold text-black transition border border-black rounded-full"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
