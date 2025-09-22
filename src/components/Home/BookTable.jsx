import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../assets/bannerimage.jpg";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function BookTable() {
  const [isOpen, setIsOpen] = useState(false);
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
        "https://pepgrill-backend.onrender.com/book-table",
        data
      );

      if (res.status === 200) {
        alert("Form Submitted Successfully");
        reset();
        setIsOpen(false);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen text-center bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl px-6"
      >
        <h1 className="font-extrabold tracking-wide text-orangeColor ">
          Catering Made Easy
        </h1>

        <p className="max-w-lg mx-auto mt-6 leading-relaxed text-gray-200">
          Planning a party, office lunch, or family gathering? Let us bring the
          flavors of Italy to your event. From handcrafted pizzas to hearty subs
          and pasta trays, our catering menu is designed to keep everyone
          satisfied. Fresh, delicious, and ready when you need it.
        </p>

        <button className="inline-flex items-center gap-2 px-8 py-2 mt-4 text-xl font-medium text-white transition-all duration-300 border border-white rounded-full bg-gradient-to-r from-blueColor via-primary to-accent hover:scale-105 hover:shadow-lg">
          <a href="tel:+15551234567">CALL FOR CATERING</a>
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black"
          >
            <div className="relative w-full max-w-3xl p-8 text-white bg-neutral-900 rounded-2xl overflow-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute text-2xl text-white top-4 right-4"
              >
                ✕
              </button>

              <h2 className="mb-6 font-bold tracking-wider text-center uppercase">
                Book Your Table
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col">
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Name"
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.name ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="Email"
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.email ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col md:col-span-2">
                    <input
                      {...register("phone", { required: "Phone is required" })}
                      type="tel"
                      placeholder="Phone"
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.phone ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      {...register("date", { required: "Date is required" })}
                      type="date"
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.date ? "border border-red-500" : ""
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      {...register("time", { required: "Time is required" })}
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.time ? "border border-red-500" : ""
                      }`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Time
                      </option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.time.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      {...register("people", {
                        required: "People is required",
                      })}
                      className={`p-3 rounded-md bg-neutral-800 text-white ${
                        errors.people ? "border border-red-500" : ""
                      }`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        People
                      </option>
                      <option>2</option>
                      <option>4</option>
                      <option>6</option>
                      <option>8</option>
                    </select>
                    {errors.people && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.people.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full col-span-2 py-3 mt-4 text-lg font-semibold text-black bg-white rounded-md hover:bg-gray-200 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
