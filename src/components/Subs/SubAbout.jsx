import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/pizza/chickensaladsliders-29.jpg";

export default function SubAbout() {
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
          alt="Subs About"
          className="rounded-xl shadow-lg w-full h-[600px] object-cover"
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
        <h1 className="mb-6 text-orangeColor">Subs at Pepperoni Grill</h1>
        <p className="mb-4 leading-relaxed text-gray-700">
          At Pepperoni Grill, our subs are crafted to satisfy every craving.
          From hearty Parmigiana to fresh Tuna’s Grinder Wraps, each creation is
          packed with bold flavors and premium ingredients that make every bite
          unforgettable.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Whether you’re in the mood for a classic favorite or a new flavor
          adventure, our subs are made to be enjoyed and shared with friends and
          family. Step into the world of delicious wraps and grinders – the
          perfect choice for any appetite.
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
