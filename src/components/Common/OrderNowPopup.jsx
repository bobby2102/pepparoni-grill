import { useEffect, useState } from "react";

export default function OrderNowPopup() {
  const [show, setShow] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md p-6 text-center bg-white rounded-2xl shadow-2xl md:max-w-lg">
        <button
          onClick={() => setShow(false)}
          className="absolute text-gray-500 top-3 right-3 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="mb-3 text-2xl font-bold text-blueColor md:text-3xl">
          Hungry? 🍕
        </h2>
        <p className="mb-6 text-black">
          Order now and enjoy the best pizza in town. Fresh, hot, and delivered
          fast!
        </p>

        <a
          href="https://order.toasttab.com/online/pepperoni-grill-9174-wiles-rd"
          target="_blank"
          className="inline-block px-6 py-3 text-lg font-semibold text-white transition rounded-full bg-blueColor hover:bg-accent"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
