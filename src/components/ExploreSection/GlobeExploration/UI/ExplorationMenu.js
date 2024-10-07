import { useContext } from "react";
import styles from "./ExplorationMenu.module.css";
import useAnimate from "../../../../hooks/use-animate";
import DataContext from "../../../../store/data-context";
import { useTranslation } from "react-i18next";

const ExplorationMenu = (props) => {
  const button6Ref = useAnimate(styles["animate"], false);

  const { isMars } =
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
          </select>
        </div>
      </div>
    </>
  );
};

export default ExplorationMenu;
