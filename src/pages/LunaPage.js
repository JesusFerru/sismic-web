import LunaCanvas from "../components/LunaCanvas";
import NavBar from "../components/NavBar";
import AnimatedPage from "./AnimatedPage";

const LunaPage = () => {
  return (
    <AnimatedPage>
      <NavBar />
      <LunaCanvas />
    </AnimatedPage>
  );
};

export default LunaPage;
