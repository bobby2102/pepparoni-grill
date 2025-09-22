import { useEffect } from "react";
import borderImage from "../../assets/border.png";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-[#fafafa] py-12 relative">
      {/* Decorative border for mobile */}
      <img
        src={borderImage}
        alt="decorative border"
        className="absolute bottom-0 left-0 w-full md:hidden"
      />

      <img
        src={borderImage}
        alt="decorative border"
        className="absolute top-0 left-0 w-full rotate-180 md:hidden"
      />

      <div className="max-w-5xl px-6 mx-auto text-center">
        {/* Heading */}
        <h3 className="mb-4 font-bold text-blueColor font-poppins">
          What Our Guests Say
        </h3>

        <div
          className="elfsight-app-a1678990-ca26-40e4-8a5c-a6955ecabc3e"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
