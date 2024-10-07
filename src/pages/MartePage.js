import NavBar from "../components/NavBar";
import MarteCanvas from "../components/ExploreSection/GlobeExploration/MarteCanvas";
import AnimatedPage from "./AnimatedPage";

const MartePage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<MarteCanvas />
		</AnimatedPage>
	);
};

export default MartePage;
