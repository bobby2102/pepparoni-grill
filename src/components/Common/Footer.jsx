import React from "react";
import logo from "../../assets/pepperoni-logo.png";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-white bg-background ">
      {/* Top Section */}
      <div className="grid gap-6 mx-auto text-center place-content-center place-items-center max-w-7xl md:flex-row md:text-left md:items-start md:gap-10">
        {/* Logo */}
        <img
          src={logo}
          alt="Pepperoni Grill Logo"
          className="w-32 mx-auto shrink-0 md:mx-0"
        />
        {/* Intro */}
        <p className="max-w-lg text-center">
          Welcome to Pepperoni Grill, your future favorite Italian restaurant!
          We are excited to bring authentic Italian flavors and a warm dining
          experience to you.
        </p>
      </div>

      {/* Get in Touch */}
      <div className="mx-auto mt-12 text-center max-w-8xl">
        {/* <h1 className="mb-4 text-accent">Get in Touch</h1>
        <p className="max-w-xl mx-auto mb-12 text-light">
          Got questions, feedback, or just want to say hi? We’d love to hear
          from you! Whether it’s about our menu, location, or anything else,
          don’t hesitate to reach out.
        </p> */}

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-12 text-sm text-left text-light sm:grid-cols-2 md:grid-cols-3">
          {/* CONTACTS */}
          <div className="text-center">
            <h3 className="mb-4 uppercase text-accent">Contacts</h3>
            <p>9174 Wiles Rd, Coral Springs, FL 33067, United States</p>
            <p className="mt-1">+1 954-345-1604</p>
          </div>

          {/* OPENING HOURS */}
          <div className="text-center">
            <h3 className="mb-4 uppercase text-accent">Opening Hours</h3>
            <div className="grid gap-2 md:gap-4">
              <p>Monday-Thursday: 11:00 am - 9:00 pm</p>
              <p>Friday - Saturday: 11:00 am - 10:00 pm</p>
              <p>Sunday: 12:00 pm - 9:00 pm</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="text-center">
            <h3 className="mb-4 uppercase text-accent">Social</h3>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.instagram.com/pepperoni.grill/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/mypepperonigrill/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full my-12 "></div>

        {/* Bottom Text */}
        <div className="text-xs text-center text-light">
          <p>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
