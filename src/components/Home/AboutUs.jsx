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
        <div className="mb-4 text-center ">
          <AnimatedHeading>Exploring the World of Taste</AnimatedHeading>
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
                  alt={member.caption}
                  className="object-cover w-full shadow-md h-72"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <p className="py-3 text-center text-accent md:py-6 ">
          We Offer Not Only the dishes, We also help you to explore the dish
          history. Come and Join Us. Know Us.
        </p>
        <p className="py-3 text-justify text-white md:py-6">
          <span className="uppercase text-accent">Michael Weingard</span>, owner
          of Pepperoni Grill located at 9174 Wiles Rd, Coral Springs, FL, has
          carved out a reputation as a homey community hub where guests feel
          like family. Known for its exceptional NY-style pizzas, the restaurant
          offers a mouthwatering array of dishes, including grilled chicken
          sandwiches, traditional strombolis, and gluten-free options. The
          welcoming atmosphere reflects Michael Weingard and his dedicated team,
          ensuring top-notch service and quality. Diners rave about the fresh
          ingredients and perfect crust, particularly the Eggplant Parm Pizza.
          With catering services that impress even the most discerning palates,
          Pepperoni Grill is a must-visit for pizza lovers.
        </p>

        <div className="grid place-content-center">
          <CommonButton
            text="Read Our Story"
            href="/about-us"
            icon={Truck}
            bgColor="bg-gradient-to-r from-blueColor via-primary to-accent"
            textColor="text-white"
            hoverBg="bg-gradient-to-r from-blueColor via-primary to-accent"
            hoverText="text-white"
          />
        </div>
      </section>

      <img src={borderImage} alt="" className="block md:hidden" />
    </div>
  );
}
