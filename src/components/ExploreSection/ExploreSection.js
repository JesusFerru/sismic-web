import styles from "./ExploreSection.module.css";
import useAnimate from "../../hooks/use-animate";
import SectionHeader from "../Miscellaneous/SectionHeader";
import { Link } from "react-router-dom";

const ExploreSection = () => {
	const introRef = useAnimate(styles["animate-intro"], false);
	const link1Ref = useAnimate(styles["animate-link"], false);
	const link2Ref = useAnimate(styles["animate-link"], false);

	return (
		<section id="explore" className="light-section">
			<div className="custom-container light-background">
				<div className="container">
					<SectionHeader
						textTheme="dark"
						titleText="Explore Luna"
						subtitleText=""
					/>
					<div className={`text-dark ${styles["explore-container"]}`}>
						<div
							ref={introRef}
							className={`${styles["explore-intro"]}`}>
							
						</div>
						<hr />
						<Link
							ref={link1Ref}
							className={`${styles["link"]}`}
							to="/sismic-web/globe-exploration">
							<h3>Explore a 3D Globe of Luna</h3>
						</Link>
						<Link
							ref={link2Ref}
							className={`${styles["link"]}`}
							to="/sismic-web/mars-exploration">
							<h3>Explore Luna in Unreal Engine 5</h3>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExploreSection;
