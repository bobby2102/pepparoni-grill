import React from "react";
import Gallery from "../Gallery/Gallery";
import BreadCrumb from "../Common/BreadCrumb";
import five from "../../assets/carousel/pepperoni-56.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function GalleryPage() {
  return (
    <>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />}
        pageName="Gallery"
      />
      <Gallery />
    </>
  );
}
