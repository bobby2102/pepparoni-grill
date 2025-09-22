import React from "react";
import { motion } from "framer-motion";
import privateDining from "../../assets/home/Services/private.jpg";
import menu from "../../assets/home/Services/menu.jpg";
import corporate from "../../assets/home/Services/corporate.jpg";
import event from "../../assets/home/Services/event.jpg";
import outdoor from "../../assets/home/Services/outdoor.jpg";
import luxury from "../../assets/home/Services/luxury.jpg";

import bg from "../../assets/bgMain.jpeg";

const services = [
  {
    id: 1,
    title: "Private Dining",
    description:
      "Exclusive dining experiences curated for intimate celebrations and special moments.",
    image: privateDining,
  },
  {
    id: 2,
    title: "Menu Customization",
    description:
      "Collaborate with our chefs to design a personalized menu tailored to your preferences.",
    image: menu,
  },
  {
    id: 3,
    title: "Corporate Catering",
    description:
      "Professional catering solutions designed to elevate your corporate events.",
    image: corporate,
  },
  {
    id: 4,
    title: "Event Planning",
    description:
      "From décor to dining, we ensure your event is unforgettable with flawless execution.",
    image: event,
  },
  {
    id: 5,
    title: "Outdoor Catering",
    description:
      "Enjoy fresh, chef-prepared meals in scenic outdoor locations with full service.",
    image: outdoor,
  },
  {
    id: 6,
    title: "Luxury Buffets",
    description:
      "Indulge in an elegant buffet spread featuring gourmet dishes and live counters.",
    image: luxury,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="py-16 ">
        <div className="container px-5 mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 font-semibold text-center text-orangeColor"
          >
            Our Services
          </motion.h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="relative overflow-hidden shadow-lg cursor-pointer rounded-2xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full transition-transform duration-500 h-72 sm:h-80 md:h-96"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
                  <h3 className="font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-accent sm:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
