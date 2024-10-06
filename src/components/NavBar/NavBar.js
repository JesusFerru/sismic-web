import { useState, useEffect, useContext } from "react";
import styles from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import DataContext from "../../store/data-context";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const currentPath = useLocation().pathname;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dataContext = useContext(DataContext);

  const resetContextHandler = () => {
    dataContext.reset();
  };

  const viewDataAnalysis = () => {
    dataContext.setSelectedQuake(null);
    dataContext.setViewTimeSeriesData({
      on: true,
      type: "data-analysis",
    });
  };

  const viewMoonAlgorithm = () => {
    dataContext.setSelectedQuake(null);
    dataContext.setViewTimeSeriesData({
      on: false,
      type: "moon-algorithm",
    });
  };

  const viewMarsAlgorithms = () => {
    dataContext.setSelectedQuake(null);
    dataContext.setViewTimeSeriesData({
      on: false,
      type: "mars-algorithm",
    });
  };

  const freeExplorationHandler = () => {
    dataContext.setViewTimeSeriesData({
      on: false,
      shallowMoonquakes: false,
      deepMoonquakes: false,
      meteoriteImpacts: false,
      artificialImpacts: false,
    });
  };

  return (
    <nav
      className={`${
        styles["top-nav"]
      } navbar navbar-expand-lg fixed-top navbar-dark ${
        scrolled ? styles["new-top-nav"] : ""
      }`}
    >
      <div className="container topnav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-custom mx-auto text-center">
            {currentPath === "/sismic-web/globe-exploration" ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={freeExplorationHandler}
                    exact="true"
                  >
                    Exploración
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={viewDataAnalysis}
                  >
                    Análisis
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={viewMoonAlgorithm}
                  >
                    Algoritmos {/* LUNA */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    onClick={resetContextHandler}
                    to="/sismic-web"
                  >
                    Volver
                  </NavLink>
                </li>
              </>
            ) : currentPath === "/sismic-web/mars-exploration" ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={freeExplorationHandler}
                    exact="true"
                  >
                    Exploración
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={viewDataAnalysis}
                  >
                    Análisis {/* MARTE */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={viewMarsAlgorithms}
                  >
                    Algoritmos {/* MARTE */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web"
                    onClick={resetContextHandler}
                  >
                    Volver
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link custom-link text-light" href="#">
                    Inicio
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={resetContextHandler}
                  >
                    Luna
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={resetContextHandler}
                  >
                    Marte
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-link text-light"
                    href="#explore"
                  >
                    GitHub
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
