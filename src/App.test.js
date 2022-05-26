import { render, screen } from "@testing-library/react";
import Banner from "./Components/Banner/index";
import Navbar, { linkList } from "./Components/Banner/Navbar/index";
import Explore from "./Components/Explore";
import { aboutSection, exploreSection } from "./data";

describe("Run App", () => {
  test("render Banner and check the banner title", () => {
    render(<Banner />);
    const linkElement = screen.getByText(/Rethink your living & renting/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Navbar and check whether all links", () => {
    render(<Navbar />);
    linkList.map((link) => {
      const linkElement = screen.queryByText(link.link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test("renders Navbar and check whether all links", () => {
    render(<Explore data={exploreSection} />);
    const linkElement = screen.findByTestId("card_1");
    expect(linkElement).toBeTruthy();
  });
});
