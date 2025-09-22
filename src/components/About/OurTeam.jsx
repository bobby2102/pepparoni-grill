import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/bgMain.jpeg";

const chefDetails = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=687&auto=format&fit=crop",
    role: "Senior Chef",
  },
  {
    id: 2,
    name: "Emily Carter",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    role: "Pastry Chef",
  },
  {
    id: 3,
    name: "Ryan Cooper",
    img: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=800&auto=format&fit=crop",
    role: "Bartender",
  },
  {
    id: 4,
    name: "Liam Hudson",
    img: "https://images.unsplash.com/photo-1555992336-cbfdbcad7093?q=80&w=800&auto=format&fit=crop",
    role: "Waiter",
  },
  {
    id: 5,
    name: "Sophie Miller",
    img: "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=800&auto=format&fit=crop",
    role: "Sous Chef",
  },
];

export default function OurTeam() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="px-6 py-16 text-light">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className=" text-accent">Meet the Team</h1>
          <p className="max-w-3xl mx-auto mt-4 text-light/80">
            We started with a food truck and a dream: to bring real,
            unapologetic flavor to burger lovers. No shortcuts, no
            compromises—just good food, great vibes, and even better company.
          </p>

          <div className="relative w-full mt-12 overflow-hidden">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            >
              {[...chefDetails, ...chefDetails, ...chefDetails].map(
                (member, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 overflow-hidden transition-transform duration-300 shadow-xl w-72 bg-accent hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="object-cover w-full h-72"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                    </div>
                    <div className="px-4 py-4 text-center">
                      <p className="mb-1 text-sm text-dark/80">{member.role}</p>
                      <h4 className=" text-dark">{member.name}</h4>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
