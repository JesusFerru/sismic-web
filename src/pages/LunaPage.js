import NavBar from "../components/NavBar";
import GlobeExploration from "../components/ExploreSection/GlobeExploration/GlobeExploration";
import AnimatedPage from "./AnimatedPage";

const LunaPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<GlobeExploration />
		</AnimatedPage>
	);
};

export default LunaPage;
