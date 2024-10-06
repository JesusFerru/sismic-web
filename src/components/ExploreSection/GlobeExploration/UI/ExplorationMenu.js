import { useContext } from "react";
import styles from "./ExplorationMenu.module.css";
import useAnimate from "../../../../hooks/use-animate";
import DataContext from "../../../../store/data-context";
import legend from "../../../../assets/images/legend.png";
import { useTranslation } from "react-i18next";

const ExplorationMenu = (props) => {
  const button6Ref = useAnimate(styles["animate"], false);

  const { nakamura1979MoonquakeData, lognonne2003MoonquakeData, isMars } =
    props;

  const dataContext = useContext(DataContext);

  const quakeChangeHandler = (event) => {
    if (event.target.value === "") {
      dataContext.setSelectedQuake(null);
    } else {
      dataContext.setSelectedQuake(JSON.parse(event.target.value));
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={styles["exploration-menu"]}>
        <div
          ref={button6Ref}
          className={styles["hide"]}
          style={dataContext.viewTimeSeriesData.on ? { opacity: 0 } : {}}
        >
          <select
            name="quake"
            className={dataContext.selectedQuake ? styles["active"] : ""}
            // disabled={dataContext.viewTimeSeriesData.on}
            disabled
            value={
              dataContext.viewTimeSeriesData.on
                ? ""
                : JSON.stringify(dataContext.selectedQuake)
            }
            onChange={quakeChangeHandler}
          >
            <option value="">{isMars ? t("mars") : t("moon")}</option>
            {nakamura1979MoonquakeData.map((quake, idx) => {
              return (
                <option key={"1979 - " + idx} value={JSON.stringify(quake)}>
                  {"Nakamura 1979 - " +
                    (quake.type ? quake.type[0] + " - " : "N/A - ") +
                    quake.year +
                    "/" +
                    quake.day.toString().padStart(3, "0")}
                </option>
              );
            })}
            {lognonne2003MoonquakeData.map((quake, idx) => {
              return (
                <option key={"2003 - " + idx} value={JSON.stringify(quake)}>
                  {"Lognonné 2003 - " +
                    (quake.type ? quake.type[0] + " - " : "N/A - ") +
                    quake.year +
                    "/" +
                    quake.day.toString().padStart(3, "0")}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className={`${styles["legend-container"]}
				 ${dataContext.topographicView ? styles["show-legend"] : ""}
				 `}
        >
          <p>Elevation (m):</p>
          <div className={styles["legend-text-container"]}>
            <p>+10780</p>
            <p>-9130</p>
          </div>
          <img
            src={legend}
            alt="Topographic View Legend"
            className={styles["legend"]}
          />
        </div>
      </div>
    </>
  );
};

export default ExplorationMenu;
