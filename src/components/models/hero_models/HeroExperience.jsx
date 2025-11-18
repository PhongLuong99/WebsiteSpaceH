import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";
import Astronaut from "./Astronaut";
import Canvasloader from "./Loader"

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={2} color="#ffffff" />
	  <Environment preset="city" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={false} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={<Canvasloader/>}>
        <HeroLights />
        {/* <Particles count={100} /> */}
        <group
          scale={isMobile ? 2 : 3}
          position={isMobile ? [-0.1, -2, 0] : [-1, 0, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          {/* <Room /> */}
		 <Astronaut/>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
