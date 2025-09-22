import { FaAngleRight } from "react-icons/fa";
import BreadCrumb from "../Common/BreadCrumb";
import image from "../../assets/carousel/Italian-9.jpg";
import SubAbout from "../Subs/SubAbout";
import SubsMenu from "../Subs/SubsMenu";
import SubBanner from "../Subs/SubBanner";
import WhyChooseUs from "../Pizzas/WhyChooseUs";

export default function SubPage() {
  return (
    <div>
      <BreadCrumb
        image={image}
        name="Home"
        icon={<FaAngleRight />}
        pageName="Subs"
      />
      <SubBanner />
      <SubAbout />
      <WhyChooseUs />
      <SubsMenu />
    </div>
  );
}
