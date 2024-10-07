import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";

import AnimatedPage from "./AnimatedPage";

const HomePage = () => {
  return (
    <AnimatedPage>
      <NavBar />
      <HomeSection />
    </AnimatedPage>
  );
};

export default HomePage;
