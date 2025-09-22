import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const events = [
  {
    title: "Culinary Night with Chef Salvatore",
    date: "September 28, 2025",
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
    description:
      "Celebrated Chef Salvatore Armonia, a dynamic force in the Parisian culinary scene, brings over 14 years of experience mastering a unique fusion of classic French technique and soulful Italian heritage.",
    location: "Pepperoni Grill Coral Springs",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.8450998539814!2d-80.25585762482898!3d26.27904748933003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90221e3f9fdc1%3A0xa00f8f0aa3f5bb0!2sPepperoni%20Grill!5e0!3m2!1sen!2sin!4v1692987401734!5m2!1sen!2sin",
  },
  {
    title: "Italian Wine & Dine Festival",
    date: "October 10, 2025",
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
    description:
      "Join us for an exclusive evening where the world of Italian wines meets authentic culinary delights, accompanied by live performances and a warm ambience.",
    location: "Pepperoni Grill Coral Springs",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.8450998539814!2d-80.25585762482898!3d26.27904748933003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90221e3f9fdc1%3A0xa00f8f0aa3f5bb0!2sPepperoni%20Grill!5e0!3m2!1sen!2sin!4v1692987401734!5m2!1sen!2sin",
  },
  {
    title: "Culinary Night with Chef Salvatore",
    date: "October 24, 2025",
    color: "#fae101",
    text: "#3778b0",
    useAlt: false,
    description:
      "Celebrated Chef Salvatore Armonia, a dynamic force in the Parisian culinary scene, brings over 14 years of experience mastering a unique fusion of classic French technique and soulful Italian heritage.",
    location: "Pepperoni Grill Coral Springs",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.8450998539814!2d-80.25585762482898!3d26.27904748933003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90221e3f9fdc1%3A0xa00f8f0aa3f5bb0!2sPepperoni%20Grill!5e0!3m2!1sen!2sin!4v1692987401734!5m2!1sen!2sin",
  },
  {
    title: "Italian Wine & Dine Festival",
    date: "November 5, 2025",
    color: "#3778b0",
    text: "#fae101",
    useAlt: true,
    description:
      "Join us for an exclusive evening where the world of Italian wines meets authentic culinary delights, accompanied by live performances and a warm ambience.",
    location: "Pepperoni Grill Coral Springs",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.8450998539814!2d-80.25585762482898!3d26.27904748933003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90221e3f9fdc1%3A0xa00f8f0aa3f5bb0!2sPepperoni%20Grill!5e0!3m2!1sen!2sin!4v1692987401734!5m2!1sen!2sin",
  },
];
export default function Events() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative w-full bg-[#fff5e9] ">
      {/* Marquee Title */}
      <div className="overflow-hidden border-y border-black bg-[#fff1db] py-4">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-3xl font-bold text-black uppercase whitespace-nowrap"
        >
          <span className="mx-8">🎉 Upcoming Events 🎉</span>
          <span className="mx-8">🎉 Upcoming Events 🎉</span>
          <span className="mx-8">🎉 Upcoming Events 🎉</span>
          <span className="mx-8">🎉 Upcoming Events 🎉</span>
          <span className="mx-8">🎉 Upcoming Events 🎉</span>
        </motion.div>
      </div>

      {/* Events Section */}
      <div
        ref={container}
        className="relative px-4 py-4 mx-auto md:py-8 max-w-7xl"
      >
        <StackedEventCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

const StackedEventCard = ({ scrollYProgress }) => {
  return (
    <div className="relative w-full">
      <div className="w-full">
        {events.map((event, index) => (
          <motion.div
            className={`relative sticky top-0 flex flex-col items-center justify-center 
              p-6 pt-16 mt-5 overflow-hidden text-white bg-white shadow-2xl 
              max-w-7xl md:p-12 md:flex md:flex-row `}
            style={{
              top: `calc(10vh + ${index * 25}px)`,
              backgroundColor: event.color,
              border: event.border,
            }}
            key={index}
          >
            {/* Event Info */}
            <div className="z-10 w-full space-y-4 text-left md:w-1/2">
              <h3 className="font-semibold" style={{ color: event.text }}>
                {event.title}
              </h3>

              <p className="font-medium" style={{ color: event.text }}>
                {event.date}
              </p>
              <p style={{ color: event.text }}>{event.description}</p>
            </div>

            {/* Google Maps */}
            <div className="relative w-full mt-8 md:w-1/2 md:mt-0">
              <iframe
                src={event.mapEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
