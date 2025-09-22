import { FaUtensils, FaBoxOpen, FaTruckPickup } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceOptionsAlt() {
  const services = [
    {
      name: "DINE-IN",
      icon: <FaUtensils size={36} />,
      link: "/our-menu",
      colors: "bg-accent text-blueColor ",
    },
    {
      name: "CATERING",
      icon: <FaBoxOpen size={36} />,
      link: "https://peperoni-grill-catering.netlify.app/",
      colors: "bg-blueColor text-white ",
    },
    {
      name: "PICK-UP",
      icon: <FaTruckPickup size={36} />,
      link: "https://order.toasttab.com/online/locations/3caa98b8-d6b6-4c5c-9764-90e0a4b3bab9/default",
      colors: "bg-accent text-blueColor ",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col  items-center justify-center p-6 transition-all duration-300  shadow-md hover:shadow-xl hover:-translate-y-2 ${service.colors}`}
          >
            <div className="mb-3 text-4xl">{service.icon}</div>
            <span className="text-lg font-semibold tracking-widest font-poppins">
              {service.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
