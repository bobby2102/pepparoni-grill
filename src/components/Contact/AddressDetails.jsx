import React from "react";
import kitchenImg from "../../assets/contact/contact.jpeg"; // replace with your image path

export default function AddressDetails() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading & Description */}
        <h1 className="mb-4 text-center text-accent">
          Innovations in the Kitchen
        </h1>
        <p className="max-w-4xl mx-auto mb-12 leading-relaxed text-center text-blueColor/90">
          Every dish that leaves our kitchen is a tribute to that heritage. From
          our hand-tossed pizza dough to our slow-simmered marinara sauce, we
          believe in using the finest, freshest ingredients to create food that
          is both comforting and delicious. We are a place of warmth and
          nostalgia, where checkered tablecloths and the aroma of garlic
          transport you to a simpler time. Whether you’re a family that has been
          dining with us for years or a new friend discovering us for the first
          time, we welcome you. This is more than just our restaurant; it’s your
          neighborhood kitchen.
        </p>

        {/* Content */}
        <div className="grid items-stretch grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src={kitchenImg}
              alt="People enjoying food"
              className="object-cover w-full h-full shadow-md rounded-2xl"
            />
          </div>

          {/* Right Info */}
          <div className="p-8 shadow-md md:p-12 bg-blueColor/5 rounded-2xl">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {/* Address */}
              <div>
                <h3 className="mb-2 font-bold tracking-wide uppercase text-accent">
                  Address
                </h3>
                <p className="text-blueColor">
                  9174 Wiles Road
                  <br />
                  Coral Springs, FL
                  <br />
                  33067, United States
                </p>
              </div>

              {/* Reservation */}
              <div>
                <h3 className="mb-2 font-bold tracking-wide uppercase text-accent">
                  Reservation
                </h3>
                <p className="text-blueColor">
                  Call Us on:
                  <br />
                  <span className="font-semibold text-blueColor">
                    (954) 345-1604
                  </span>
                </p>
              </div>

              {/* Dining */}
              <div>
                <h3 className="mb-2 font-bold tracking-wide uppercase text-accent">
                  Dining
                </h3>
                <p className="text-blueColor">
                  Indoor Dining & Heated Outdoor Patios
                  <br />
                  Private Rooms & Terrace
                </p>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="mb-2 font-bold tracking-wide uppercase text-accent">
                  Opening Hours
                </h3>
                <p className="text-blueColor">
                  Monday - Thursday:
                  <br />
                  11:00 AM - 9:00 PM
                </p>
                <p className="mt-2 text-blueColor">
                  Friday - Saturday:
                  <br />
                  11:00 AM - 10:00 PM
                </p>
                <p className="mt-2 font-semibold text-blueColor">
                  Sunday:
                  <br />
                  12:00 PM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
