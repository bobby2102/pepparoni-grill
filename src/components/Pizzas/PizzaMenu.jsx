import React from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/pizza/deluxe_pizza.png";
import image2 from "../../assets/pizza/supreme.png";
import image3 from "../../assets/pizza/menu3.png";
import image4 from "../../assets/pizza/menu4.png";
import image5 from "../../assets/pizza/menu5.png";
import image6 from "../../assets/pizza/menu6.png";

import bg from "../../assets/whitebg.png";

export default function PizzaMenu() {
  const data = [
    {
      id: 1,
      name: "Deluxe",
      desc: "Pepperoni, sausage, mushrooms, onions, green peppers, extra cheese.",
      image: image1,
    },
    {
      id: 2,
      name: "Supreme",
      desc: "Create your own specialty pizza! Choose any five toppings.",
      image: image2,
    },
    {
      id: 3,
      name: "Margarita",
      desc: " fried onions,  mozzarella ",
      image: image3,
    },
    {
      id: 4,
      name: "Hawaiian Pizza",
      desc: "Fresh pineapple, ham & mozzarella cheese with our famous pizza sauce.",
      image: image4,
    },
    {
      id: 5,
      name: "BBQ Chicken Pizza",
      desc: "BBQ sauce, grilled chicken, onions & mozzarella cheese.",
      image: image5,
    },
    {
      id: 6,
      name: "Meat Lovers",
      desc: "Pepperoni, sausage, bacon, ham, mozzarella & tomato sauce.",
      image: image6,
    },
  ];

  return (
    <section className="container px-6 py-16 mx-auto">
      {/* Heading */}
      <h1 className="mb-12 text-center text-orangeColor">Pizza Specialities</h1>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {data.map((pizza) => (
          <motion.div
            key={pizza.id}
            className="flex flex-col justify-between h-auto p-6 text-center transition bg-white border shadow-md border-orangeColor rounded-xl hover:shadow-lg"
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
            {/* Pizza Image with hover rotate */}
            <motion.img
              src={pizza.image}
              alt={pizza.name}
              className="object-contain w-40 h-40 mx-auto mb-6"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />

            {/* Text Section */}
            <div className="flex flex-col justify-between flex-grow">
              <h4 className="mb-3 font-bold text-blueColor">{pizza.name}</h4>
              <p className="mb-6 ">{pizza.desc}</p>

              {/* Order Button */}
              <motion.a
                href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-semibold transition border-2 rounded-full text-blueColor bg-orangeColor "
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
