import { useState, useEffect, useContext } from "react";
import styles from "./NavBar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import DataContext from "../store/data-context";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const currentPath = useLocation().pathname;
  const { t } = useTranslation();

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
      <LanguageSwitcher />
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
                    {t("exploration")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={viewDataAnalysis}
                  >
                    {t("analysis")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={viewMoonAlgorithm}
                  >
                    {t("algorithms")} {/* LUNA */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    onClick={resetContextHandler}
                    to="/sismic-web"
                  >
                    {t("back")}
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
                    {t("exploration")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={viewDataAnalysis}
                  >
                    {t("analysis")} {/* MARTE */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={viewMarsAlgorithms}
                  >
                    {t("algorithms")} {/* MARTE */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web"
                    onClick={resetContextHandler}
                  >
                    {t("back")}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link custom-link text-light" href="#">
                    {t("start")}
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/globe-exploration"
                    onClick={resetContextHandler}
                  >
                    {t("moon")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link custom-link text-light"
                    to="/sismic-web/mars-exploration"
                    onClick={resetContextHandler}
                  >
                    {t("mars")}
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
