import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://my-pepperoni-backend.onrender.com/contact-form",
        data
      );

      if (res.status === 200) {
        alert("Form Submitted Successfully");
        reset();
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-16 bg-light text-dark">
      <div className="grid gap-10 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Left: Google Map */}
        <div className="overflow-hidden shadow-lg rounded-xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0435796989246!2d-80.25602862371593!3d26.27107838918157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904fbca36f8f9%3A0x8b06c3814a7a7e71!2s9174%20Wiles%20Rd%2C%20Coral%20Springs%2C%20FL%2033065!5e0!3m2!1sen!2sus!4v1703138439311!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>

        {/* Right: Contact Info + Form */}
        <div>
          <h1 className="mb-4 text-orangeColor ">We’re Here For You</h1>
          <p className="mb-6 text-blueColor">
            We understand that your needs are important, and we are here to
            assist you every step of the way. Our dedicated team is committed to
            providing top-notch support and addressing any questions or concerns
            you may have.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="p-2 border rounded bg-light hover:bg-primary hover:text-light"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 border rounded bg-light hover:bg-primary hover:text-light"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 border rounded bg-light hover:bg-primary hover:text-light"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 border rounded bg-light hover:bg-primary hover:text-light"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your name"
              className={`w-full py-2 border-b focus:outline-none ${
                errors.name
                  ? "border-red-500"
                  : "border-dark/30 focus:border-primary"
              } text-dark`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Your email"
              className={`w-full py-2 border-b focus:outline-none ${
                errors.email
                  ? "border-red-500"
                  : "border-dark/30 focus:border-primary"
              } text-dark`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your message"
              className={`w-full py-2 border-b focus:outline-none ${
                errors.message
                  ? "border-red-500"
                  : "border-dark/30 focus:border-primary"
              } text-dark`}
              rows="4"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2 font-semibold uppercase transition border-b-2 border-primary text-accent hover:bg-primary hover:text-light disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
