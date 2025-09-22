import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import one from "../../assets/home/speak2.jpeg";
import two from "../../assets/home/speak1.jpeg";
import image from "../../assets/spekacybg.png";

export default function SpeakeasySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full md:min-h-screen h-[100dvh] overflow-hidden bg-blueColor"
    >
      {/* ✅ Desktop split images */}
      <div className="relative items-center justify-between hidden h-screen md:flex">
        <motion.img
          src={one}
          alt="Left bar"
          className="object-cover w-1/2 h-full"
          style={{ x: leftX }}
        />
        <motion.img
          src={two}
          alt="Right bar"
          className="object-cover w-1/2 h-full"
          style={{ x: rightX }}
        />
      </div>

      {/* ✅ Mobile background image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={image}
          alt="Speakeasy background"
          className="w-full h-full object-fit"
        />
      </div>

      {/* ✅ Text Section */}
      <motion.div
        style={{ y: textY }}
        className="absolute z-20 w-full px-4 text-center text-white md:top-24 top-16"
      >
        <h1 className="mb-4 text-orangeColor">Our Speakeasy</h1>
        <p className="max-w-2xl mx-auto mb-6 md:text-[20px] text-base text-justify md:mt-12 mt-6 p-3">
          Discover the heart of Coral Springs at Pepperoni Grill, where every
          visit feels like coming home. Tucked away on 9174 Wiles Rd, our
          neighborhood spot is more than just pizza—it’s a place where passion
          meets flavor. From our famous NY-style pies and hearty strombolis to
          gluten-free favorites and grilled classics, every bite is crafted with
          care. Owner Michael and his team bring warmth, quality, and community
          spirit to the table, making every guest feel like family. Whether
          you’re here for a cozy dinner, a slice of Eggplant Parm Pizza
          perfection, or catering that impresses, Pepperoni Grill is where
          memories—and cravings—are made.
        </p>
        <a
          href="/our-menu"
          className="inline-flex items-center gap-2 px-8 py-2 text-xl font-medium text-white transition-all duration-300 border border-white rounded-full bg-gradient-to-r from-blueColor via-primary to-accent hover:scale-105 hover:shadow-lg"
        >
          CHECK THE MENU
        </a>
      </motion.div>
    </section>
  );
}
