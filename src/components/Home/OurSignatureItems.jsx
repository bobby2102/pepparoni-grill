import { useRef } from "react";
import { useScroll, useTransform, motion, color } from "framer-motion";
import image1 from "../../assets/home/image1.png";
import image2 from "../../assets/home/chickenParmigiana.png";
import image3 from "../../assets/home/bakedZiti.png";

export default function OurSignatureItems() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative w-full ">
      <div className="py-4 overflow-hidden border-black border-y bg-gradient-to-r from-blueColor via-primary to-accent">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-3xl font-bold text-white uppercase whitespace-nowrap"
        >
          <span className="mx-8">🔥 Our Signature Bites 🔥</span>
          <span className="mx-8">🍕 Authentic Italian Pizzas 🍕</span>
          <span className="mx-8">🥖 Freshly Baked Subs 🥖</span>
          <span className="mx-8">🔥 Our Signature Bites 🔥</span>
          <span className="mx-8">🍕 Authentic Italian Pizzas 🍕</span>
          <span className="mx-8">🥖 Freshly Baked Subs 🥖</span>
          <span className="mx-8">🔥 Our Signature Bites 🔥</span>
          <span className="mx-8">🍕 Authentic Italian Pizzas 🍕</span>
          <span className="mx-8">🥖 Freshly Baked Subs 🥖</span>
        </motion.div>
      </div>

      <div ref={container} className="relative">
        <StackedCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

const StackedCard = ({ scrollYProgress }) => {
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className="relative w-full">
      <div className="w-full ">
        {signatureBites.map((item, index) => (
          <motion.div
            className={`relative sticky top-0 flex flex-col items-center justify-center 
              p-6 pt-16 mt-5 overflow-hidden text-white bg-white shadow-2xl 
              max-w-7xl md:p-12 md:flex md:flex-row `}
            style={{
              top: `calc(10vh + ${index * 25}px)`,
              backgroundColor: item.color,
              border: item.border,
            }}
            key={index}
          >
            {/* Price Badge */}
            {/* <div className="absolute flex items-center justify-center w-12 h-12 font-semibold bg-white rounded-full shadow-md text-background top-3 left-3 md:top-6 md:left-6">
              {item.price}
            </div> */}

            {/* Text */}
            <div className="z-10 w-full space-y-6 text-left md:w-1/2">
              <h3 style={{ color: item.text }} className="font-semibold">
                {item.title}
              </h3>
              <p style={{ color: item.text }}>{item.description}</p>
              <div className="my-5">
                <a
                  href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-2 text-center transition-all duration-300"
                  style={{
                    border: `4px solid ${item.text}`,
                    color: item.text,
                    borderRadius: "9999px",
                  }}
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full mt-8 md:w-1/2 md:mt-0">
              <motion.img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-auto mx-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const signatureBites = [
  {
    title: "Cheese Steak Pizza",
    price: "12$",
    description:
      "A hearty pizza loaded with tender strips of steak, sautéed onions, peppers, and plenty of melted mozzarella, finished with a drizzle of creamy cheese sauce.",
    image: image1,
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
  },
  {
    title: "Chicken Parmigiana",
    price: "14$",
    description:
      "Crispy breaded chicken cutlet topped with rich marinara, melted mozzarella, and parmesan, served over pasta or in a fresh-baked sub roll.",
    image: image2,
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
  },
  {
    title: "Baked Ziti",
    price: "16$",
    description:
      "Classic comfort food — pasta tossed in marinara and ricotta, layered with mozzarella, and baked until bubbling and golden brown.",
    image: image3,
    text: "#3778b0",
    color: "#FADC02",
    useAlt: false,
  },
];
