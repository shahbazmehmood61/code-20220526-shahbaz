import Banner from "./Components/Banner";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import { exploreSection, aboutSection } from "./data";

function App() {
  return (
    <div className="main__container">
      <Banner />
      <div className="margin__top__30">
        <Explore data={exploreSection} />
      </div>
      <Explore data={aboutSection} />
      <Footer />
    </div>
  );
}

export default App;
