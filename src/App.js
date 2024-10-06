import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background/Background";
import ScrollToTop from "./pages/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import GlobeExplorationMoonPage from "./pages/GlobeExplorationMoonPage";
import GlobeExplorationMarsPage from "./pages/GlobeExplorationMarsPage";
import UnrealEngineExplorationPage from "./pages/UnrealEngineExplorationPage";
import DataProvider from "./store/DataProvider";

const App = () => {
	const location = useLocation();
	return (
		<DataProvider>
			<Background />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route path="/sismic-web" element={<LandingPage />} />
					<Route
						path="/sismic-web/globe-exploration"
						element={<GlobeExplorationMoonPage />}
					/>
					<Route
						path="/sismic-web/mars-exploration"
						element={<GlobeExplorationMarsPage />}
					/>
					<Route path="*" element={<LandingPage />} />
				</Routes>
			</AnimatePresence>
		</DataProvider>
	);
};

export default App;
