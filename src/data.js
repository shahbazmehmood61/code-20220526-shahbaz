import Explore1 from "./assets/images/explore_1.png";
import Explore2 from "./assets/images/explore_2.png";
import About1 from "./assets/images/about_1.png";
import About2 from "./assets/images/about2.png";
import About3 from "./assets/images/about_3.png";
import About4 from "./assets/images/about_4.png";

export const exploreSection = {
  title: "Explore",
  subtitle: (
    <p className="explore__cards__subtitle">
      From one-guest rooms <br /> to penthouses with pools and gardens
    </p>
  ),
  exploreCards: [
    { title: "Room with one king-size bed", price: "35$", area: "28м²", source: Explore1 },
    { title: "Penthouse for 8 person", price: "2039$", area: "438м²", source: Explore2 },
  ],
};

export const aboutSection = {
  title: "About",
  subtitle: <p className="explore__cards__subtitle">Allow us to tell you a short story...</p>,
  exploreCards: [
    {
      title: "Chapter I",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      source: About1,
    },
    {
      title: "Chapter II",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      source: About2,
    },
    {
      title: "Chapter III",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      source: About3,
    },
    {
      title: "Chapter IV",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      source: About4,
    },
  ],
};
