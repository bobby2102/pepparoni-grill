import React from "react";
import AnimatedHeading from "../Common/AnimatedRevealText";
import OurSignatureItems from "./OurSignatureItems";

export default function SignatureBites() {
  return (
    <div className="bg-white">
      <section className="px-4 py-4 mx-auto md:py-8 max-w-7xl">
        <div className="mb-4 text-center md:mb-12">
          <h1 className=" text-blueColor">Our signature bites</h1>
        </div>

        <p className="py-3 text-center md:py-6 text-background">
          Every pizza begins with hand-tossed dough, made fresh daily and topped
          with authentic Italian sauces, premium cheeses, and the freshest
          ingredients. Our subs are baked to perfection, packed with bold
          flavors, crisp veggies, and house-made sauces that make every bite
          unforgettable. At our place, ordinary is never on the menu — only true
          Italian passion on a plate.
        </p>

        <OurSignatureItems />
      </section>
    </div>
  );
}
