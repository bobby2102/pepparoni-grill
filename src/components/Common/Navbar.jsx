import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/pepperoni-logo.png";

import heroBg from "../../assets/carousel/Hero44B.jpg";
import heroBgMobile from "../../assets/carousel/Hero44B.jpg";

import CommonButton from "./CommonButton";
import { useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import GradientButton from "./GradientButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative w-full ${
        location.pathname === "/" ? "h-screen" : "h-auto"
      } overflow-hidden`}
    >
      {/* ✅ Single Background Image */}
      {location.pathname === "/" && (
        <>
          <img
            src={heroBg}
            alt="Pepperoni Grill"
            className="absolute object-cover w-full h-[100dvh] md:block hidden"
          />
          <img
            src={heroBgMobile}
            alt="Pepperoni Grill"
            className="absolute block object-cover w-full h-screen md:hidden"
          />

          <div className="absolute inset-0 z-10 bg-black/40" />
        </>
      )}

      {/* ✅ Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300  ${
          scrolled ? "bg-white text-blueColor shadow-md" : "text-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          <a href="/">
            <img src={logo} alt="Logo" className="h-24 md:h-32" />
          </a>

          {/* Desktop Nav */}
          <ul className="items-center hidden gap-6 text-sm font-medium md:flex lg:gap-8 md:text-base">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About us" },
              { href: "/our-menu", label: "Menu" },
              { href: "/pizza", label: "Pizza & Sub" },
              // { href: "/blogs", label: "Blogs" },
              { href: "/gallery", label: "Gallery" },

              { href: "/events", label: "Events" },
              {
                href: "/catering",
                label: "Catering",
                external: true,
              },
              { href: "/contact-us", label: "Contact" },
            ].map(({ href, label, external }) => (
              <li key={href}>
                <a
                  href={href}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="transition-all duration-300 hover:text-accent hover:underline hover:scale-[1.05] inline-block"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <CommonButton
                text="Pick Up"
                href="https://order.toasttab.com/online/locations/3caa98b8-d6b6-4c5c-9764-90e0a4b3bab9/default"
                icon={ArrowRight}
                bgColor="bg-blueColor"
                textColor="text-white"
                hoverBg="bg-accent"
                hoverText="text-blueColor"
                target="_blank"
              />
            </li>
            <li>
              <CommonButton
                text="Order Now"
                href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                icon={ArrowRight}
                bgColor="bg-blueColor"
                textColor="text-white"
                hoverBg="bg-accent"
                hoverText="text-blueColor"
                target="_blank"
              />
            </li>
          </ul>

          <div className="z-30 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-3 text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blueColor via-primary to-accent hover:scale-105 hover:shadow-lg"
            >
              {menuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-between p-6 overflow-y-auto text-black bg-white md:hidden ">
          <div>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold tracking-widest font-Sonophone text-blueColor">
                  Pepperoni Grill
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 font-medium">
              <a href="/" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
              <a href="/our-menu" onClick={() => setMenuOpen(false)}>
                Menu
              </a>
              <a href="/pizza" onClick={() => setMenuOpen(false)}>
                Pizza & Sub
              </a>
              <a href="/events" onClick={() => setMenuOpen(false)}>
                Events
              </a>
              <a href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>
              {/* <a href="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </a> */}
              <a
                href="/catering"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Catering
              </a>
              <a href="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <a
                href="https://order.toasttab.com/online/locations/3caa98b8-d6b6-4c5c-9764-90e0a4b3bab9/default"
                target="_blank"
                className="p-4 px-4 mt-4 text-center border border-black rounded-full"
              >
                Pick Up
              </a>
              <a
                href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                target="_blank"
                className="p-4 px-4 mt-4 text-center border border-black rounded-full"
              >
                Order Now
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* ✅ Banner Text */}
      {location.pathname === "/" && (
        <div className="absolute z-20 w-full px-4 text-center text-white transform -translate-y-1/2 top-1/2">
          <div className="mx-auto max-w-7xl">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-2 leading-[80px] font-italiana  text-accent "
            >
              Pepperoni Grill
            </motion.h1>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4"
            >
              Delicious pizza, Sub, pasta and salads!
            </motion.h3>
            <div className="flex flex-col items-center gap-4 mt-6">
              <GradientButton href="/our-menu" text="View Menu" delay={0.5} />
              <GradientButton
                href="/catering"
                target="_blank"
                text="Catering"
                delay={0.7}
              />
              <GradientButton href="/pizza" text="Pizza & Sub" delay={0.9} />
              <GradientButton
                href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
                text="Order"
                delay={1.1}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
