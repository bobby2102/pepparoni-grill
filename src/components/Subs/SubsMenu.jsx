import React from "react";
import image1 from "../../assets/subs/capresesub-3.jpg";
import image2 from "../../assets/subs/chickenparmigiana-27.jpg";
import image3 from "../../assets/subs/grilledchickenCesarsaladwrap-63.jpg";
import image4 from "../../assets/subs/meatballparmigianasub-1.jpg";

import { motion } from "framer-motion";
import bg from "../../assets/whitebg.png";

export default function SubsMenu() {
  const data = [
    {
      id: 1,
      name: "Caprese Sub",
      desc: "Fresh mozzarella, ripe tomatoes, basil, and a drizzle of balsamic glaze on a toasted sub roll.",
      image: image1,
    },
    {
      id: 2,
      name: "Chicken Parmigiana",
      desc: "Crispy breaded chicken cutlet topped with marinara sauce and melted mozzarella, served on fresh bread.",
      image: image2,
    },
    {
      id: 3,
      name: "Grilled Chicken Caesar Salad Wrap",
      desc: "Juicy grilled chicken, crisp romaine, parmesan cheese, and creamy Caesar dressing wrapped in a warm tortilla.",
      image: image3,
    },
    {
      id: 4,
      name: "Meatball Parmigiana Sub",
      desc: "Homemade meatballs smothered in marinara sauce, topped with melted mozzarella on a toasted sub roll.",
      image: image4,
    },
  ];

  return (
    <section className="container px-6 py-16 mx-auto">
      {/* Heading */}
      <h1 className="mb-12 text-center text-orangeColor">Our Subs Specials</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {data.map((sub) => (
          <motion.div
            key={sub.id}
            className="flex flex-col h-full p-6 transition bg-white border shadow-md border-blueColor rounded-xl hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Uniform Image Box */}
            <div className="w-full h-[200px] flex items-center justify-center mb-6">
              <motion.img
                src={sub.image}
                alt={sub.name}
                className="object-contain h-full"
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col flex-grow text-center">
              <h4 className="mb-3 font-bold text-blueColor">{sub.name}</h4>
              <p className="flex-grow mb-6 ">{sub.desc}</p>

              {/* Order Button aligned bottom */}
              <motion.a
                href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-auto text-sm font-semibold transition border-2 rounded-full text-accent bg-blueColor"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
