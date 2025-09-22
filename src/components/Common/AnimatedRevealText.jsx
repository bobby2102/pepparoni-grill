import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedHeading({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 60, scale: 0.95 });
    }
  }, [inView, controls]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center  text-orangeColor"
    >
      {children}
    </motion.h1>
  );
}
