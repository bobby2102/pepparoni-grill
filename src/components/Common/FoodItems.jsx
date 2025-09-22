import React from "react";
import one from "../../assets/items/steakmushroomrisotto-16.jpg";
import two from "../../assets/items/stuffedshells-39.jpg";
import three from "../../assets/items/stuffedmushrooms-6.jpg";
import four from "../../assets/items/tomatobasil-74.jpg";
import five from "../../assets/items/tortelliniFresca-19.jpg";
import six from "../../assets/items/tourofItaly-45.jpg";
import seven from "../../assets/items/tunasalad-50.jpg";
import eight from "../../assets/items/Tuscanspinachsalad-51.jpg";

const items = [one, two, three, four, five, six, seven, eight];

export default function FoodItems() {
  // Duplicate the array so it loops smoothly
  const loopItems = [...items, ...items];

  return (
    <section className="py-16 overflow-hidden bg-orangeColor">
      <div className="relative w-full">
        {/* Scrolling Row */}
        <div className="flex animate-scroll">
          {loopItems.map((img, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-shrink-0 mx-4 bg-white shadow-lg w-60 h-60"
            >
              <img
                src={img}
                alt={`Food ${idx}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
