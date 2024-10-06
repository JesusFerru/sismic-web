import NavBar from "../components/NavBar/NavBar";
import GlobeExplorationMars from "../components/ExploreSection/GlobeExploration/GlobeExplorationMars";
import AnimatedPage from "./AnimatedPage";

const GlobeExplorationMarsPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<GlobeExplorationMars />
		</AnimatedPage>
	);
};

export default GlobeExplorationMarsPage;
