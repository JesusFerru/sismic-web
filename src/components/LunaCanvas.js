import { Canvas } from "@react-three/fiber";
import styles from "./LunaCanvas.module.css";
import Moon from "./Models3d/Moon";
import MenuExplorar from "./MenuExplorar";
import DisplayOptions from "./DisplayOptions";
import Camera from "./Models3d/Camera";
import Space from "./Models3d/Space";
import Lights from "./Models3d/Lights";

const LunaCanvas = () => {

	return (
		<section className={styles["space"]}>
			<div className={`${styles["exploration-container"]}`}>
				<Canvas>
					<Camera />
					<Space />
					<Lights />
					<Moon />
				</Canvas>
				<MenuExplorar
				/>
				<DisplayOptions />
			</div>
		</section>
	);
};

export default LunaCanvas;
