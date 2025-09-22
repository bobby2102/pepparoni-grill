import React from "react";
import Banner from "../Home/Banner";
import SignatureBites from "../Home/SignatureBites";
import SpeakeasySection from "../Home/SpeakeasySection";
import BookTable from "../Home/BookTable";
import LocationMap from "../Home/LocationMap";
import AboutUs from "../Home/AboutUs";
import ServiceOptions from "../Home/ServiceOptions";
import OrderNowPopup from "../Common/OrderNowPopup";
import GoogleReviews from "../Home/GoogleReviews";

export default function HomePage() {
  return (
    <>
      {" "}
      <OrderNowPopup />
      <ServiceOptions />
      <AboutUs />
      {/* <Banner /> */}
      <SignatureBites />
      <SpeakeasySection />
      <BookTable />
      <GoogleReviews />
      <LocationMap />
    </>
  );
}
