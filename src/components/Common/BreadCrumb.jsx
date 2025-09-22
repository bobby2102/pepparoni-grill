import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BreadCrumb = (props) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full md:h-[70dvh] h-[40dvh] flex items-center justify-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      />

      <div className="absolute inset-0 z-10 bg-black/70" />

      <div className="relative z-20 px-4 text-center">
        <motion.div
          className="flex items-center justify-center gap-2 mb-4 text-sm"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={0.5}
        >
          <a
            href="/"
            className="hover:text-[#EC6A50] leading-normal tracking-wider md:text-[20px] text-lg font-bold"
          >
            {props.name}
          </a>
          <p>{props.icon}</p>
          <p>{props.pageName}</p>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold md:text-6xl"
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={1}
        >
          {props.pageName}
        </motion.h1>
      </div>
    </div>
  );
};

export default BreadCrumb;
