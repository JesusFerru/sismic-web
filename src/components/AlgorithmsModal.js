import { useContext, useEffect, useState } from "react";
import DataContext from "../store/data-context";
import styles from "./AlgorithmsModal.module.css";
import ReactDOM from "react-dom";

export function AlgorithmsModal(props) {
  const dataContext = useContext(DataContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1);
  }, []);

  function closePortal() {
    setShow(false);
    setTimeout(() => {
      dataContext.setViewTimeSeriesData({
        on: false,
        type: undefined,
      });
    }, 1000);
  }
  return ReactDOM.createPortal(
    <div className={styles["modal-container"]} onClick={closePortal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles["modal-content"]} ${
          show ? styles["modal-show"] : ""
        }`}
      >
        {props.children}
      </div>
    </div>,
    document.body,
  );
}
