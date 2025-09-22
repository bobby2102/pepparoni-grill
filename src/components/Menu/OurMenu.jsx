import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import one from "../../assets/menu/2023-PEPPERONI-GRILL-TAKE-OUT-MENU-12_13_23_page-0001-scaled.webp";
import two from "../../assets/menu/2023-PEPPERONI-GRILL-TAKE-OUT-MENU-12_13_23_page-0002-scaled.webp";

const menuImages = [one, two];
import bg from "../../assets/bgMain.jpeg";

export default function OurMenu() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % menuImages.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="px-4 py-12 text-dark sm:px-6 md:px-10">
        <div className="mx-auto text-center max-w-7xl">
          <h1 className="mb-4 text-orangeColor ">Our Menu</h1>

          {/* Carousel Container */}
          <div className="relative overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={menuImages[index]}
                alt={`Menu page ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-contain bg-light cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsModalOpen(true)}
              />
            </AnimatePresence>

            {/* Left Button */}
            <button
              onClick={prev}
              className="absolute p-2 transition -translate-y-1/2 rounded-full shadow-lg top-1/2 left-2 sm:left-4 bg-accent hover:bg-primary"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-dark" />
            </button>

            {/* Right Button */}
            <button
              onClick={next}
              className="absolute p-2 transition -translate-y-1/2 rounded-full shadow-lg top-1/2 right-2 sm:right-4 bg-accent hover:bg-primary"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-dark" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-3 sm:mt-4">
            {menuImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  i === index ? "bg-accent" : "bg-light/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-2 bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-6xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <img
                  src={menuImages[index]}
                  alt={`Menu page ${index + 1}`}
                  className="w-full max-h-[85vh] object-contain rounded-lg shadow-xl"
                />

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute p-2 rounded-full bg-accent top-3 right-3 hover:bg-primary"
                >
                  <X className="w-6 h-6 text-dark" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
