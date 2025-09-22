import React from "react";
import BreadCrumb from "../Common/BreadCrumb";
import Blogs from "../Blogs/Blogs";
import five from "../../assets/carousel/Hero44B.jpg";
import { FaAngleRight } from "react-icons/fa";
export default function BlogPage() {
  return (
    <div>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />} // icon component
        pageName="Menu"
      />
      <Blogs />
    </div>
  );
}
