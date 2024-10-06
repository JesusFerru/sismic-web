import React, { useContext } from "react";
import DataContext from "../../../../store/data-context";
import styles from "./TimeSeriesChart.module.css";
import { AlgorithmsModal } from "./AlgorithmsModal";

function ConditionalRenderer() {
  const dataContext = useContext(DataContext);
  const type = dataContext.viewTimeSeriesData.type ?? "";

  if (type === "data-analysis") {
    return (
      <div className={`${styles["chart-img"]}`}>
        <img alt="analysis" src="/images/grafica_lunar.png" />;
      </div>
    );
  }

  if (type === "moon-algorithm") {
    return (
      <AlgorithmsModal>
        <p className={styles["modal-title"]}>Comparacion de algoritmos lunares</p>
        <p className={styles["modal-text"]}>Señal de velocidad en función de tiempo absoluto</p>
        <img src="/images/analisis-velocidad-sismica.jpeg" alt="Analisis velocidad sísmica"/>

        <p className={styles["modal-title"]}>Predicciones en 30 años</p>
        <img src="/images/velocidad-prediccion-30.jpeg" alt="Análisis predicción"/>

      </AlgorithmsModal>
    );
  }

  if (type === "mars-algorithm") {
    return (
      <AlgorithmsModal>
        <p className={styles["modal-title"]}>Comparacion de algoritmos de Marte</p>
        <p className={styles["modal-text"]}>Señal de velocidad en función de tiempo absoluto</p>
        <img src="/images/analisis-velocidad-sismica.jpeg" alt="Analisis velocidad sísmica"/>

        <p className={styles["modal-title"]}>Predicciones en 30 años</p>
        <img src="/images/velocidad-prediccion-30.jpeg" alt="Análisis predicción"/>

      </AlgorithmsModal>
    );;
  }
  return <div> UNKNOWN </div>;
}

const TimeSeriesChart = (props) => {
  const dataContext = useContext(DataContext);

  return (
    <div
      className={`${styles["chart"]} ${
        dataContext.viewTimeSeriesData.on ? styles["show"] : ""
      }`}
    >
      <ConditionalRenderer />
    </div>
  );
};

export default TimeSeriesChart;
