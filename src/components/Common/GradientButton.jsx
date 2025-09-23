import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function GradientButton({ href, text, delay, target }) {
  return (
    <motion.a
      href={href}
      target={target}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay, duration: 0.8 }}
      className="
        inline-flex items-center justify-center 
        gap-2
        w-[150px] px-3 py-1.5 text-sm font-medium text-white
        transition-all duration-300
        border border-white rounded-full
        bg-gradient-to-r from-blueColor via-primary to-accent
        hover:scale-105 hover:shadow-lg
      "
    >
      <span className="text-center">{text}</span>
      <span className="flex items-center justify-center w-5 h-5 border border-white rounded-full">
        <FaArrowRight className="text-xs text-white" />
      </span>
    </motion.a>
  );
}
