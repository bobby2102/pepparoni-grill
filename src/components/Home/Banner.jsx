import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const data = [
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
    {
      title: "Pepperoni",
    },
  ];

  const duplicateData = [...data, ...data];
  return (
    <div className="relative w-full py-4 overflow-hidden bg-background">
      <motion.div
        className="flex whitespace-nowrap bg-background"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {duplicateData.map((d, i) => (
          <div key={i} className="flex-shrink-0 snap-start text-accent">
            <p className="uppercase">
              {d.title} {" /"}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
