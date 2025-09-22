import ReactLenis from "lenis/react";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import OurMenuPage from "./components/Pages/OurMenuPage";
import ContactPage from "./components/Pages/ContactPage";
import BlogPage from "./components/Pages/BlogPage";

import ViewBlogPage from "./components/Pages/ViewBlogPage";
import Events from "./components/Events/Events";
import EventsPage from "./components/Pages/EventsPage";
import PizzaPage from "./components/Pages/PizzaPage";
import SubPage from "./components/Pages/SubPage";
import GalleryPage from "./components/Pages/GalleryPage";
import CateringPage from "./components/Pages/CateringPage";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
      className="overflow-hidden"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-menu" element={<OurMenuPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/pizza" element={<PizzaPage />} />

        <Route path="/subs" element={<SubPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/view-blogs" element={<ViewBlogPage />} />
        <Route path="/catering" element={<CateringPage />} />
      </Routes>

      <Footer />
    </ReactLenis>
  );
}
