import { FaAngleRight } from "react-icons/fa";
import BreadCrumb from "../Common/BreadCrumb";
import image from "../../assets/pizza/pizzabanner.jpg";
import PizzaHero from "../Pizzas/PizzaHero";
import PizzaAbout from "../Pizzas/PizzaAbout";
import PizzaMenu from "../Pizzas/PizzaMenu";
import PizzaBottom from "../Pizzas/PizzaBottom";
import PizzaBanner from "../Pizzas/PizzaBanner";
import WhyChooseUs from "../Pizzas/WhyChooseUs";
import SubAbout from "../Subs/SubAbout";
import SubsMenu from "../Subs/SubsMenu";
export default function PizzaPage() {
  return (
    <div>
      <BreadCrumb
        image={image}
        name="Home"
        icon={<FaAngleRight />}
        pageName="Pizza & Sub"
      />
      <PizzaBanner />
      <PizzaHero />
      <PizzaAbout />
      <SubAbout />
      <PizzaMenu />
      <SubsMenu />
      <WhyChooseUs />
      <PizzaBottom />
    </div>
  );
}
