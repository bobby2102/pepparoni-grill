import bg from "../../assets/whitebg.png";
import ContactSection from "../Contact/ContactSection";

export default function LocationMap() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="relative flex flex-col items-center w-full px-6 py-16 ">
        {/* Heading */}
        <div className="max-w-3xl mb-10 text-center">
          <h1 className=" text-orangeColor">Find Us Here</h1>
          <p className="mt-4 text-blueColor">
            Visit our location and experience the best we have to offer. We're
            easy to find!
          </p>
        </div>

        <ContactSection />

        {/* Map Container */}
        {/* <div className="w-full  h-[450px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57236.194080442656!2d-80.248381!3d26.285601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91acf36c1baff%3A0xe2115812635941ce!2s9174%20Wiles%20Rd%2C%20Coral%20Springs%2C%20FL%2033065!5e0!3m2!1sen!2sus!4v1755759797418!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}

        {/* Address */}
        <div className="mt-8 text-center">
          <h1 className="font-semibold tracking-wide text-orangeColor">
            Our Address
          </h1>
          <p className="text-blueColor">
            9174 Wiles Rd, Coral Springs, FL 33065
          </p>
          <a
            href="https://maps.google.com/?q=9174+Wiles+Rd,+Coral+Springs,+FL+33065"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-2 mt-5 text-xl font-medium text-white transition-all duration-300 border border-white rounded-full bg-gradient-to-r from-blueColor via-primary to-accent hover:scale-105 hover:shadow-lg"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
