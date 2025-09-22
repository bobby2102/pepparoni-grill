import React from "react";
import image1 from "../../assets/carousel/pepperoni-56.jpg";
import image2 from "../../assets/items/stuffedmushrooms-6.jpg";
import image3 from "../../assets/home/speak2.jpeg";
import bg from "../../assets/bgMain.jpeg";

const blogData = {
  id: 4,
  coverImage: image1,
  date: "5 APR, 2024",
  category: "Desserts",
  title: "Stories Behind the Dishes We Love",
  content: [
    {
      type: "paragraph",
      text: `"Stories Behind the Dishes We Love" delves into the captivating narratives intertwined with some of the most beloved culinary creations from around the globe...`,
    },
    {
      type: "paragraph",
      text: `Through anecdotal research and vivid storytelling, "Stories Behind the Dishes We Love" uncovers the origins and evolution of these gastronomic treasures...`,
    },
    {
      type: "image",
      src: image2,
      alt: "Delicious food table",
    },
    {
      type: "quote",
      text: "Nourishing Narratives: Unveiling the Stories Behind the Dishes We Cherish",
    },
    {
      type: "paragraph",
      text: `Step into a culinary journey where every plate tells a tale. "Nourishing Narratives" delves into the rich history, cultural significance...`,
    },
    {
      type: "heading",
      text: `"Savoring Tradition: Unraveling the Stories Behind the Dishes We Love"`,
    },
    {
      type: "paragraph",
      text: `Embark on a culinary journey through the rich tapestry of flavors and tales that define our favorite dishes...`,
    },
    {
      type: "list",
      items: [
        "Connections to the past",
        "Preserving traditions",
        "Culinary innovation",
        "Appreciation for ingredients",
        "Diversity of flavors",
        "Preserving culinary heritage",
        "Body Conditioning and Fitness",
      ],
    },
    {
      type: "image",
      src: image3,
      alt: "Dinner table setup",
    },
  ],
};

export default function BlogView() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl px-4 py-12 mx-auto">
        {/* Cover Image */}
        <img
          src={blogData.coverImage}
          alt={blogData.title}
          className="object-cover w-full mb-8 shadow-md rounded-2xl h-80"
        />

        {/* Meta Info */}
        <p className="mb-2 text-sm font-bold tracking-wide uppercase text-accent">
          {blogData.date} • {blogData.category}
        </p>

        {/* Title */}
        <h1 className="mb-8 text-3xl font-extrabold text-accent md:text-5xl">
          {blogData.title}
        </h1>

        {/* Content Rendering */}
        <div className="space-y-8 leading-relaxed text-accent/90">
          {blogData.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-lg">
                    {block.text}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={index}
                    className="mt-8 text-2xl font-bold text-accent"
                  >
                    {block.text}
                  </h2>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="px-4 py-3 italic bg-white border-l-4 rounded-md text-blueColor border-accent"
                  >
                    {block.text}
                  </blockquote>
                );

              case "image":
                return (
                  <img
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    className="object-cover w-full rounded-2xl shadow-md h-[450px]"
                  />
                );

              case "list":
                return (
                  <ul
                    key={index}
                    className="pl-6 space-y-2 text-lg list-disc text-accent"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
