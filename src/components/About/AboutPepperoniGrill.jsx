import { useState } from "react";
import bg from "../../assets/bgMain.jpeg";

export default function AboutPepperoniGrill() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <section className="w-full px-6 py-6 md:py-16 lg:px-20">
        <div className="mx-auto text-center max-w-7xl">
          {/* Heading */}
          <h1 className="mb-4 text-accent">Our Story</h1>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full bg-accent"></div>

          {/* Content */}
          <div className="space-y-6 text-base leading-relaxed text-left text-justify text-white sm:text-lg">
            {/* Always visible intro */}
            <p>
              <span className="font-semibold text-accent">
                Established in 1999
              </span>
              , Pepperoni Grill has been committed to serving Italian American
              culinary excellence to its customers for over 26 years. The
              restaurant was founded by{" "}
              <span className="font-semibold text-accent">
                Michael Weingard
              </span>
              , of the Culinary Institute of America’s Class of 1993.
            </p>

            <p>
              While he was professionally trained at the Culinary Institute,
              Michael simultaneously completed an externship working under{" "}
              <span className="italic text-accent">Chef Mark Peel</span> and{" "}
              <span className="italic text-accent">
                Michelin-starred Chef & James Beard Award-winner Nancy Silverton
              </span>{" "}
              at their restaurant, Campanile, in Los Angeles, California.
            </p>

            {/* Extra content that toggles */}
            {expanded && (
              <>
                <p>
                  After culinary schooling, he moved to Florence, Italy, for one
                  year to deepen his studies. Upon returning to the United
                  States, he collaborated on{" "}
                  <span className="font-semibold text-accent">Ynot Pizza</span>{" "}
                  with his mentor and cousin, Tony D’Silvestro. Today, it has
                  evolved into the franchise known as{" "}
                  <span className="font-semibold text-accent">
                    Ynot Italian
                  </span>{" "}
                  throughout Virginia.
                </p>

                <p>
                  After five years at Ynot Pizza, Michael moved to Coral
                  Springs, Florida, to help with the creation and development of{" "}
                  <span className="font-semibold text-accent">
                    Pepperoni Grill
                  </span>
                  , which has become a staple restaurant in the community.
                </p>

                <p>
                  While crafting the spirit of Pepperoni Grill, Michael combined
                  family traditions—such as his grandmother’s{" "}
                  <span className="text-accent">
                    pasta fagioli, lasagna, and marinara sauce
                  </span>
                  —with his own creations, including{" "}
                  <span className="text-accent">
                    mushroom soup and pepperoni sticks
                  </span>
                  .
                </p>

                <p>
                  Over time, Pepperoni Grill has created a warm, inviting
                  environment that has become a{" "}
                  <span className="italic text-accent">“second home”</span> for
                  its customers. Trusted catering partnerships with local
                  schools, religious centers, sporting teams, and community
                  organizations have strengthened these bonds.
                </p>

                <p className="text-lg font-medium text-accent">
                  Our mission is simple:{" "}
                  <span className="underline decoration-accent">
                    to welcome our customers home
                  </span>
                  , and provide the highest level of service every day, every
                  time.
                </p>
              </>
            )}

            {/* Toggle button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-5 py-2 font-medium text-white transition-colors rounded-full bg-accent hover:bg-blueColor"
              >
                {expanded ? "Read Less" : "Read Full Story"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
