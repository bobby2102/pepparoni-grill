import React from "react";
import OurMenu from "../Menu/OurMenu";
import FoodItems from "../Common/FoodItems";
import BreadCrumb from "../Common/BreadCrumb";
import five from "../../assets/carousel/Hero44B.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function OurMenuPage() {
  return (
    <>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />} // icon component
        pageName="Menu"
      />
      <OurMenu />
      <FoodItems />
    </>
  );
}
