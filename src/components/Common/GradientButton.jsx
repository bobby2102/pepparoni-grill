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
        inline-flex items-center justify-between
        w-[200px] px-6 md:py-2 py-1 text-xl font-medium text-white
        transition-all duration-300 
        border border-white rounded-full 
        bg-gradient-to-r from-blueColor via-primary to-accent
        hover:scale-105 hover:shadow-lg"
    >
      {text}
      <span className="flex items-center justify-center w-6 h-6 border border-white rounded-full md:w-8 md:h-8">
        <FaArrowRight className="text-white" />
      </span>
    </motion.a>
  );
}
