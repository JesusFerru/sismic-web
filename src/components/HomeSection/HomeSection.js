import { useState } from "react";
import styles from "./HomeSection.module.css";
import useAnimate from "../../hooks/use-animate";

const HomeSection = () => {
	const [lunaSize, setLunaSize] = useState(false);
	const [marteSize, setMarteSize] = useState(false);
	const elementRef = useAnimate(styles["animate"]);

	// Funciones para cambiar el tamaño al hacer clic
	const handleLunaClick = () => {
		setLunaSize(!lunaSize);
	};

	const handleMarteClick = () => {
		setMarteSize(!marteSize);
	};

	return (
		<div className={styles["parent-container"]}>
			<div className={styles["overlay-container"]}>
				{/* Texto "Luna" a la izquierda */}
				<span
					ref={elementRef}
					className={`${styles["text"]} ${styles["text-luna"]} ${
						lunaSize ? styles["large-text"] : ""
					}`}
					onClick={handleLunaClick}>
					Luna
				</span>

				{/* Texto "Marte" a la derecha */}
				<span
					className={`${styles["text"]} ${styles["text-marte"]} ${
						marteSize ? styles["large-text"] : ""
					}`}
					onClick={handleMarteClick}>
					Marte
				</span>
			</div>
		</div>
	);
};

export default HomeSection;
