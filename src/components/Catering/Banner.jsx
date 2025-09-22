import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import one from "../../assets/cat/1.jpg";
import two from "../../assets/cat/2.jpg";
import three from "../../assets/cat/3.jpg";

import oneMobile from "../../assets/cat/4.jpg";
import twoMobile from "../../assets/cat/5.jpg";
import threeMobile from "../../assets/cat/3.jpg";

const cateringBanners = [
  {
    id: 1,
    bannerDescription: "Every Occasion Covered",
    bannerSubDescription: "Menus crafted to impress your guests.",
    btn: "Explore Catering",
    btnLink: "/catering",
    img: one,
    imgMobile: oneMobile,
  },
  {
    id: 2,
    bannerDescription: "Fresh & With Care",
    bannerSubDescription: "Authentic flavors that bring people together.",
    btn: "Book Catering",
    btnLink: "/catering",
    img: two,
    imgMobile: twoMobile,
  },
  {
    id: 3,
    bannerDescription: "Celebrate with Us",
    bannerSubDescription: "From small parties to big events, we’ve got you.",
    btn: "Plan Your Event",
    btnLink: "/catering",
    img: three,
    imgMobile: threeMobile,
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [banners] = useState(cateringBanners);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full md:h-[80vh] h-[100dvh] overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.img
          src={banners[current]?.img}
          alt={banners[current]?.bannerDescription}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute hidden object-cover w-full h-full md:block"
        />

        <motion.img
          src={banners[current]?.imgMobile}
          alt={banners[current]?.bannerDescription}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute block object-cover w-full h-full md:hidden"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/40" />

      {/* Banner Text */}
      <div className="absolute z-20 w-full px-4 text-center text-white transform -translate-y-1/2 top-1/2">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            key={banners[current]?.bannerDescription}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-2 text-accent"
          >
            {banners[current]?.bannerDescription}
          </motion.h1>
          <motion.h3
            key={banners[current]?.bannerSubDescription}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 font-semibold"
          >
            {banners[current]?.bannerSubDescription}
          </motion.h3>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-20 flex gap-3 bottom-6 right-6">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
