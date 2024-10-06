import { useState } from "react";
import styles from "./HomeSection.module.css";
import useAnimate from "../../hooks/use-animate";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const [lunaSize, setLunaSize] = useState(false);
  const [marteSize, setMarteSize] = useState(false);
  const elementRef = useAnimate(styles["animate"]);
  const navigate = useNavigate();

  // Funciones para los botones de navegación
  const handleLunaButtonClick = () => {
    navigate("/sismic-web/globe-exploration");
  };

  const handleMarteButtonClick = () => {
    navigate("/sismic-web/unreal-engine-exploration");
  };

  const handleLunaClick = () => {
    setLunaSize(!lunaSize);
  };

  const handleMarteClick = () => {
    setMarteSize(!marteSize);
  };

  return (
    <div className={styles["parent-container"]}>
      <div className={styles["overlay-container"]}>
        {/* Títulos existentes */}
        <span
          ref={elementRef}
          className={`${styles["text"]} ${styles["text-luna"]} ${
            lunaSize ? styles["large-text"] : ""
          }`}
          onClick={handleLunaClick}
        >
          Luna
        </span>

        <span
          className={`${styles["text"]} ${styles["text-marte"]} ${
            marteSize ? styles["large-text"] : ""
          }`}
          onClick={handleMarteClick}
        >
          Marte
        </span>

        <button
			className={styles["moon-button"]}
			style={{ top: "3%", left: "11%" }}  
			onClick={handleLunaButtonClick}
		>
			Luna
		</button>

		<button
			className={styles["mars-button"]}
			style={{ top: "10%", right: "12%" }} 
			onClick={handleMarteButtonClick}
		>
			Marte
		</button>
      </div>
    </div>
  );
};

export default HomeSection;
