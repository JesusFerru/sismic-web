import { useContext } from "react";
import styles from "./ExplorationMenu.module.css";
import useAnimate from "../../../../hooks/use-animate";
import DataContext from "../../../../store/data-context";
import legend from "../../../../assets/images/legend.png";

const ExplorationMenu = (props) => {
	const button1Ref = useAnimate(styles["animate"], false);
	const button2Ref = useAnimate(styles["animate"], false);
	const button3Ref = useAnimate(styles["animate"], false);
	const button4Ref = useAnimate(styles["animate"], false);
	const button5Ref = useAnimate(styles["animate"], false);
	const button6Ref = useAnimate(styles["animate"], false);

	const { nakamura1979MoonquakeData, lognonne2003MoonquakeData, isMars } = props;

	const dataContext = useContext(DataContext);

	const quakeChangeHandler = (event) => {
		if (event.target.value === "") {
			dataContext.setSelectedQuake(null);
		} else {
			dataContext.setSelectedQuake(JSON.parse(event.target.value));
		}
	};

	const shallowMoonquakesChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			shallowMoonquakes:
				!dataContext.viewTimeSeriesData.shallowMoonquakes,
		});
	};

	const deepMoonquakesChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			deepMoonquakes: !dataContext.viewTimeSeriesData.deepMoonquakes,
		});
	};

	const meteoriteImpactsChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			meteoriteImpacts: !dataContext.viewTimeSeriesData.meteoriteImpacts,
		});
	};

	const artificialImpactsChangeHandler = () => {
		dataContext.setViewTimeSeriesData({
			artificialImpacts:
				!dataContext.viewTimeSeriesData.artificialImpacts,
		});
	};

	return (
		<>
			<div className={styles["exploration-menu"]}>
				{!isMars && <div ref={button5Ref} className={styles["hide"]}>
					<button
						className={
							dataContext.landingSites ? styles["active"] : ""
						}
						onClick={dataContext.toggleLandingSites}>
						Apollo Mission Landing Sites
					</button>
				</div>}
				<div
					ref={button6Ref}
					className={styles["hide"]}
					style={
						dataContext.viewTimeSeriesData.on ? { opacity: 0 } : {}
					}>
					<select
						name="quake"
						className={
							dataContext.selectedQuake ? styles["active"] : ""
						}
						disabled={dataContext.viewTimeSeriesData.on}
						value={
							dataContext.viewTimeSeriesData.on
								? ""
								: JSON.stringify(dataContext.selectedQuake)
						}
						onChange={quakeChangeHandler}>
						<option value="">Select a Seismic Event</option>
						{nakamura1979MoonquakeData.map((quake, idx) => {
							return (
								<option
									key={"1979 - " + idx}
									value={JSON.stringify(quake)}>
									{"Nakamura 1979 - " +
										(quake.type
											? quake.type[0] + " - "
											: "N/A - ") +
										quake.year +
										"/" +
										quake.day.toString().padStart(3, "0")}
								</option>
							);
						})}
						{lognonne2003MoonquakeData.map((quake, idx) => {
							return (
								<option
									key={"2003 - " + idx}
									value={JSON.stringify(quake)}>
									{"Lognonné 2003 - " +
										(quake.type
											? quake.type[0] + " - "
											: "N/A - ") +
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
				 `}>
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
