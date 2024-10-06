import NavBar from "../components/NavBar/NavBar";
import HomeSection from "../components/HomeSection/HomeSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";

import AnimatedPage from "./AnimatedPage";

const LandingPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<HomeSection />
			<ExploreSection />
			
		</AnimatedPage>
	);
};

export default LandingPage;
