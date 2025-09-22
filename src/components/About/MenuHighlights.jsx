import bg from "../../assets/whitebg.png";

export default function MenuHighlights() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="w-full px-6 py-6 md:py-16 lg:px-20">
        <div className="mx-auto text-center max-w-7xl">
          {/* Heading */}
          <h1 className="mb-4 text-blueColor">Our Menu</h1>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full bg-orangeMix"></div>

          {/* Content */}
          <div className="p-5 space-y-6 text-base leading-relaxed text-left text-justify text-gray-700 bg-white sm:text-lg">
            <p>
              The{" "}
              <span className="font-semibold text-orangeMix">
                Mushroom Soup
              </span>
              , a fan-favorite for 26 years, was created by Michael through a
              happy accident. By substituting{" "}
              <span className="italic text-orangeMix">
                portobello mushrooms
              </span>{" "}
              in a broccoli soup recipe, he crafted a creamy, one-of-a-kind
              dish. To this day, customers leave their phone numbers with staff
              to be notified when it’s the{" "}
              <span className="font-semibold text-orangeMix">soup du jour</span>
              .
            </p>

            <p>
              Bringing the tastes of his hometown,{" "}
              <span className="font-semibold text-orangeMix">Philadelphia</span>
              , Michael introduced the beloved{" "}
              <span className="font-semibold text-orangeMix">
                Pepperoni Sticks
              </span>
              . Made fresh daily, these stuffed breadsticks are served in orders
              of 3 or 6, offering a tasty twist on a classic.
            </p>

            <p>
              Michael also welcomes customers home with his{" "}
              <span className="font-semibold text-orangeMix">
                grandmother’s recipes
              </span>
              . Her{" "}
              <span className="font-semibold text-orangeMix">lasagna</span>,
              originating from Calabria, Italy, layers sausage and cheeses into
              an irresistible dish of authentic Italian glory.
            </p>

            <p>
              The{" "}
              <span className="font-semibold text-orangeMix">
                marinara sauce
              </span>{" "}
              is the pinnacle of our menu, serving as the base for dozens of
              favorites—mozzarella sticks, pasta dishes, and pizzas. Straight
              from Michael’s grandmother’s kitchen, this recipe delivers
              authenticity in every bite.
            </p>

            <p>
              Another staple is the{" "}
              <span className="font-semibold text-orangeMix">
                pasta fagioli soup
              </span>
              , a comforting family recipe passed down through generations. Made
              with beans, carrots, onion, celery, bacon, and pasta, this hearty
              soup pairs perfectly with any entrée, bringing the warmth of an
              Italian home to every table.
            </p>

            <p className="text-lg font-medium text-orangeMix">
              Each dish carries a story, a memory, and the flavors of{" "}
              <span className="underline decoration-orangeMix">
                true Italian tradition
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
