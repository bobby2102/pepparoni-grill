import React from "react";
import heroBg from "../../assets/carousel/Hero44B.jpg";
import { Utensils, Calendar, Clock, Smile } from "lucide-react";

export default function Count() {
  const data = [
    {
      id: 1,
      icon: <Utensils className="w-8 h-8 text-white" />,
      count: "1,000+",
      title: "Dishes Served",
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8 text-white" />,
      count: "250+",
      title: "Events Hosted",
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8 text-white" />,
      count: "10+",
      title: "Years Of Service",
    },
    {
      id: 4,
      icon: <Smile className="w-8 h-8 text-white" />,
      count: "30,000+",
      title: "Satisfied Customers",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 py-24">
        <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-6 text-center transition-transform bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent">
                {item.icon}
              </div>

              {/* Count */}
              <h2 className="text-3xl font-extrabold text-accent">
                {item.count}
              </h2>

              {/* Title */}
              <h3 className="my-4 text-blueColor">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
