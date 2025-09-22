import { motion } from "framer-motion";
import image1 from "../../assets/carousel/deluxepizza-47.jpg";
import image2 from "../../assets/carousel/Italian-9.jpg";
import image3 from "../../assets/carousel/pepperoni-56.jpg";

export default function PizzaHero() {
  return (
    <section className="container flex flex-col w-full gap-6 px-5 py-10 mx-auto md:flex-row md:gap-0">
      {/* First Image */}
      <motion.div
        className="w-full md:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={image1}
          alt="Pizza 1"
          className="w-full h-[250px] md:h-[400px] object-cover rounded-xl md:rounded-l-xl md:rounded-r-none"
        />
      </motion.div>

      {/* Second Image with colored background */}
      <motion.div
        className="flex items-center justify-center w-full p-4 md:w-1/3 bg-accent md:p-6 rounded-xl md:rounded-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={image2}
          alt="Pizza 2"
          className="h-[200px] md:h-[350px] w-full shadow-lg object-cover rounded-lg"
        />
      </motion.div>

      {/* Third Image */}
      <motion.div
        className="w-full md:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img
          src={image3}
          alt="Pizza 3"
          className="w-full h-[250px] md:h-[400px] object-cover rounded-xl md:rounded-r-xl md:rounded-l-none"
        />
      </motion.div>
    </section>
  );
}
