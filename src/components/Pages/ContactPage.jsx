import React from "react";
import AddressDetails from "../Contact/AddressDetails";
import ContactSection from "../Contact/ContactSection";
import five from "../../assets/carousel/Hero44B.jpg";
import { FaAngleRight } from "react-icons/fa";
import BreadCrumb from "../Common/BreadCrumb";
export default function ContactPage() {
  return (
    <>
      <BreadCrumb
        image={five}
        name="Home"
        icon={<FaAngleRight />}
        pageName="Contact Us"
      />
      <AddressDetails />
      <ContactSection />
    </>
  );
}
