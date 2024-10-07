import React, { useContext, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import moon from "../../assets/images/moon.jpg";
import topography from "../../assets/images/topography.jpg";
import DataContext from "../../store/data-context";

const Moon = () => {
	const moonTexture = useLoader(TextureLoader, moon);
	const topographyTexture = useLoader(TextureLoader, topography);
	const dataContext = useContext(DataContext);

	return (
		<mesh>
			<sphereGeometry
				attach="geometry"
				args={[2, 64, 64, -Math.PI / 2]}
			/>
			<meshStandardMaterial
				map={
					dataContext.topographicView === true
						? topographyTexture
						: moonTexture
				}
			/>
		</mesh>
	);
};

export default Moon;
