import { Canvas } from "@react-three/fiber";
import styles from "./LunaCanvas.module.css";
import MenuExplorar from "./MenuExplorar";
import DisplayOptions from "./DisplayOptions";
import Camera from "./Models3d/Camera";
import Space from "./Models3d/Space";
import Lights from "./Models3d/Lights";
import Mars from "./Models3d/Mars";

const MarteCanvas = () => {

	return (
		<section className={styles["space"]}>
			<div className={`${styles["exploration-container"]}`}>
				<Canvas>
					<Camera />
					<Space />
					<Lights />
					<Mars />
				</Canvas>
				<MenuExplorar
				    isMars={true}
				/>
				<DisplayOptions />
			</div>
		</section>
	);
};

export default MarteCanvas;
