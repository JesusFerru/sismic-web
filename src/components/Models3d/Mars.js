import React, { useContext } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import mars from "../../assets/images/mars.jpg";
import topography from "../../assets/images/topography.jpg";
import DataContext from "../../store/data-context";

const Mars = () => {
  const marsTexture = useLoader(TextureLoader, mars);
  const topographyTexture = useLoader(TextureLoader, topography);
  const dataContext = useContext(DataContext);

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 64, 64, -Math.PI / 2]} />
      <meshStandardMaterial
        map={
          dataContext.topographicView === true ? topographyTexture : marsTexture
        }
      />
    </mesh>
  );
};

export default Mars;
