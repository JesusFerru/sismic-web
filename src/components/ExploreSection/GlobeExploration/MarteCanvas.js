import { Canvas } from "@react-three/fiber";
import styles from "./GlobeExploration.module.css";
import ExplorationMenu from "./UI/ExplorationMenu";
import TimeSeriesChart from "./UI/TimeSeriesChart";
import Camera from "../../Models3d/Camera";
import Space from "../../Models3d/Space";
import Lights from "../../Models3d/Lights";
import Mars from "../../Models3d/Mars";

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
				<ExplorationMenu
				    isMars={true}
				/>
				<TimeSeriesChart />
			</div>
		</section>
	);
};

export default MarteCanvas;
