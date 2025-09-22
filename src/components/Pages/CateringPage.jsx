import React, { useRef } from "react";
import Banner from "../Catering/Banner";
import AboutUs from "../Catering/AboutUs";
import Packages from "../Catering/Packages";
import Menu from "../Catering/Menu";
import Services from "../Catering/Services";
import Count from "../Catering/Count";
import How from "../Catering/How";
import ContactSection from "../Contact/ContactSection";

export default function CateringPage() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (!contactRef.current) return;

    const elementPosition =
      contactRef.current.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 1000;

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * progressRatio);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };
  return (
    <>
      <Banner />
      <AboutUs />

      <Packages scrollToContact={scrollToContact} />
      <Menu />
      <Services />
      <Count />
      <How />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
}
