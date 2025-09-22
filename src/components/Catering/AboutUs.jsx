import { motion } from "framer-motion";
import AnimatedHeading from "../Common/AnimatedRevealText";
import CommonButton from "../Common/CommonButton";
import { Truck } from "lucide-react";

import one from "../../assets/home/foodItems/antipasto-42.jpg";
import two from "../../assets/home/foodItems/bakedziti-12.jpg";
import three from "../../assets/home/foodItems/beefWellington-7.jpg";
import four from "../../assets/home/foodItems/blackenedshrimp-81.jpg";
import five from "../../assets/home/foodItems/calamari-22.jpg";
import six from "../../assets/home/foodItems/Cobb-62B.jpg";
import seven from "../../assets/home/foodItems/deluxepizza-47.jpg";
import eight from "../../assets/home/foodItems/eggplantcapresetower-31.jpg";
import nine from "../../assets/home/foodItems/filetwithfingerlingpotatoes-20.jpg";
import ten from "../../assets/home/foodItems/grilledchickendinner-13.jpg";
import eleven from "../../assets/home/foodItems/porktenderloin-25.jpg";
import twelve from "../../assets/home/foodItems/stuffedshells-39.jpg";

import bg from "../../assets/bgMain.jpeg";

import borderImage from "../../assets/border.png";

const teamMembers = [
  {
    src: one,
  },
  {
    src: two,
  },
  {
    src: three,
  },
  {
    src: four,
  },
  {
    src: five,
  },
  {
    src: six,
  },
  {
    src: seven,
  },
  {
    src: eight,
  },
  {
    src: nine,
  },
  {
    src: ten,
  },
  {
    src: eleven,
  },
  {
    src: twelve,
  },
];

export default function AboutUs() {
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="px-4 py-4 mx-auto md:py-8 max-w-7xl"
      >
        <div className="mb-4 text-center md:mb-12">
          <AnimatedHeading> Pepperoni Grill & Catering</AnimatedHeading>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {duplicatedMembers.map((member, i) => (
              <div key={i} className="min-w-[250px] flex-shrink-0 snap-start">
                <img
                  src={member.src}
                  alt="Pepperoni Grill Dish"
                  className="object-cover w-full shadow-md h-72"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <p className="py-3 text-center text-white md:py-6">
          At <strong>Pepperoni Grill</strong>, food is more than a meal — it’s a
          story. From handcrafted pizzas to rich pasta dishes, we’ve created a
          place where flavors meet tradition, and every guest feels like family.
        </p>

        <p className="py-3 text-center text-white md:py-6">
          Our passion doesn’t stop at the table. With{" "}
          <strong>Pepperoni Grill Catering</strong>, we bring the same authentic
          taste and warm hospitality to your special occasions. Whether it’s an
          intimate gathering, a family celebration, or a large corporate event,
          our team ensures every bite is memorable. Fresh ingredients, bold
          flavors, and service with heart — that’s the Pepperoni Grill promise.
        </p>
      </section>
    </div>
  );
}
