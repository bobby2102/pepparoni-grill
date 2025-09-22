import React, { useState } from "react";

const imageModules = import.meta.glob(
  "../../assets/gallery/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);

const images = Object.entries(imageModules).map(([path, module]) => {
  const caption = path.split("/").pop().split(".")[0];
  return {
    src: module.default || module,
    caption,
  };
});

export default function AutoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="p-4">
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.caption || `Image ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* {img.caption && (
              <span className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                {img.caption}
              </span>
            )} */}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
          <button
            className="absolute text-4xl font-bold text-white top-4 right-6"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <img
            className="max-w-[90%] max-h-[80%] shadow-xl"
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].caption}
          />

          <div className="absolute flex gap-6 bottom-8">
            <button
              onClick={prevImage}
              className="px-4 py-2 text-white border border-white rounded bg-white/10 hover:bg-white/30"
            >
              ‹ Prev
            </button>
            <button
              onClick={nextImage}
              className="px-4 py-2 text-white border border-white rounded bg-white/10 hover:bg-white/30"
            >
              Next ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
