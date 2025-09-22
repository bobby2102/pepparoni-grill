import React from "react";
import {
  FaUtensils,
  FaClipboardList,
  FaCalendarCheck,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import bg from "../../assets/bgMain.jpeg";

export default function How() {
  const steps = [
    {
      icon: <FaUtensils />,
      title: "Choose Your Menu",
      desc: "Select from our variety of delicious catering options.",
    },
    {
      icon: <FaClipboardList />,
      title: "Customize Your Order",
      desc: "Adjust according to your event size and preferences.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Book & Confirm",
      desc: "Submit your event details and confirm your booking.",
    },
    {
      icon: <FaTruck />,
      title: "Enjoy Your Event",
      desc: "We deliver fresh and hot food right to your venue.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover"
    >
      <section className="px-4 py-16 ">
        {/* Heading */}
        <h1 className="mb-4 text-center text-accent">How Our Catering Works</h1>

        {/* Steps */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center max-w-xs px-6 py-8 transition transform bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-white rounded-full bg-accent">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="mb-2 text-lg font-bold text-center text-blueColor">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-center text-gray-600">{step.desc}</p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="items-center hidden md:flex">
                  <FaArrowRight className="mx-4 text-3xl text-accent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
