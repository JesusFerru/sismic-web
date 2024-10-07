import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import HomePage from "./pages/HomePage.js";
import LunaPage from "./pages/LunaPage";
import MartePage from "./pages/MartePage.js";
import DataProvider from "./store/DataProvider";

const App = () => {
  const location = useLocation();
  return (
    <DataProvider>
      <Background />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/sismic" element={<HomePage />} />
          <Route path="/sismic/moon" element={<LunaPage />} />
          <Route path="/sismic/mars" element={<MartePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </DataProvider>
  );
};

export default App;
