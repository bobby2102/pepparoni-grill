import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommonButton({
  text = "Click Me",
  icon: Icon,
  href,
  bgColor = "bg-primary",
  textColor = "text-white",
  hoverBg = "bg-white",
  hoverText = "text-accent",
  className = "",
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
    transition-all duration-300 group
    ${bgColor} ${textColor} hover:${hoverBg} hover:${hoverText} ${className}
  `;

  const Content = () => (
    <>
      <span className="transition-all duration-300">{text}</span>
      <AnimatePresence>
        {hovered && Icon && (
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={`w-5 h-5`} />
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  return href ? (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={baseClasses}
      {...props}
    >
      <Content />
    </a>
  ) : (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={baseClasses}
      {...props}
    >
      <Content />
    </button>
  );
}
