import React from "react";
import { FaAngleRight } from "react-icons/fa";
import five from "../../assets/carousel/Hero44B.jpg";
import BlogView from "../Blogs/BlogView";
import BreadCrumb from "../Common/BreadCrumb";

export default function ViewBlogPage() {
  return (
    <div>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />} // icon component
        pageName="View Blog"
      />
      <BlogView />
    </div>
  );
}
