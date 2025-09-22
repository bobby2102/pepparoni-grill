import React from "react";
import BreadCrumb from "../Common/BreadCrumb";
import five from "../../assets/carousel/pepperoni-56.jpg";
import { FaAngleRight } from "react-icons/fa";
import Events from "../Events/Events";

export default function EventsPage() {
  return (
    <div>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />}
        pageName="Events"
      />
      <Events />
    </div>
  );
}
