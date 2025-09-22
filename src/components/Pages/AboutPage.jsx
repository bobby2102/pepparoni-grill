import React from "react";
import OurStory from "../About/OurStory";
import OurTeam from "../About/OurTeam";
import FoodItems from "../Common/FoodItems";
import BreadCrumb from "../Common/BreadCrumb";
import { FaAngleRight } from "react-icons/fa";
// import five from "../../assets/carousel/pepperoni-grill-5-21-18-1-768x1024-1.jpg";
import five from "../../assets/carousel/Hero44B.jpg";
import AboutPepperoniGrill from "../About/AboutPepperoniGrill";
import MenuHighlights from "../About/MenuHighlights";

export default function AboutPage() {
  return (
    <>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />} // icon component
        pageName="About Us"
      />
      {/* <OurStory /> */}
      <AboutPepperoniGrill />
      <MenuHighlights />
      <OurTeam />
      <FoodItems />
    </>
  );
}
