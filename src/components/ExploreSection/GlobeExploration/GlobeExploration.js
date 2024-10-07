import { Canvas } from "@react-three/fiber";
import styles from "./GlobeExploration.module.css";
import Moon from "../../Models3d/Moon";
import ExplorationMenu from "./UI/ExplorationMenu";
import TimeSeriesChart from "./UI/TimeSeriesChart";
import Camera from "../../Models3d/Camera";
import Space from "../../Models3d/Space";
import Lights from "../../Models3d/Lights";

const GlobeExploration = () => {

	return (
		<section className={styles["space"]}>
			<div className={`${styles["exploration-container"]}`}>
				<Canvas>
					<Camera />
					<Space />
					<Lights />
					<Moon />
				</Canvas>
				<ExplorationMenu
				/>
				<TimeSeriesChart />
			</div>
		</section>
	);
};

export default GlobeExploration;
