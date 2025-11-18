import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three"; // animated
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "./Loader";

const Earth = ({isMobile}) => {
  const earth = useGLTF("/models/planet/scene.gltf");
  const ref = useRef();

  // trigger scale animation on mount
  const [mounted, setMounted] = useState(false);

  const { scale } = useSpring({
    scale: mounted ? (isMobile ? 1.8 : 3) : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <a.group ref={ref} scale={scale} position-y={0}>
      <primitive object={earth.scene} />
    </a.group>
  );
};

const EarthCanvas = () => {
	// Detect mobile devices
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2, 5] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
