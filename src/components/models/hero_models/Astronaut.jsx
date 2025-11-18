import React, { forwardRef, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, QuadraticBezierLine } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// Spaceman component
const Spaceman = forwardRef(({ scale = 0.2, position = [0, 0, 0], rotation = [0, 0, 0] }, ref) => {
  const { nodes, materials } = useGLTF("/models/Astronaut.glb");
  
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, [materials]);

  return (
    <mesh
      ref={ref}
      geometry={nodes.Astronaut_mesh.geometry}
      material={materials.Astronaut_mat}
      material-envMapIntensity={0}
      castShadow
      receiveShadow
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
});

// Ship component
const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/model.gltf");

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, [materials]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_1.geometry} material={materials.Mat1} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_2.geometry} material={materials.Mat2} material-envMapIntensity={0.2} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  );
});

// Cable component
const Cable = ({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) => {
  const ref = useRef();
  useFrame(() => ref.current.setPoints(start.current.getWorldPosition(v1), end.current.getWorldPosition(v2)));
  return <QuadraticBezierLine ref={ref} lineWidth={3} color="#ff2060" />;
};

// Main Astronaut group
const Astronaut = () => {
  const spaceman = useRef();
  const ship = useRef();

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <Float
        scale={isMobile ? 0.7 : 1}
        rotation={[0, 0.6, 0]}
      >
        <Ship ref={ship} />
      </Float>

      <Float
	  position={[0,1.5,0]}
        rotation={[1, 0, 0]}
        rotationIntensity={6}
        floatIntensity={10}
        speed={4}
      >
        <Spaceman scale={0.2} ref={spaceman}  />
      </Float>

      {/* <Cable start={ship}  end={spaceman} /> */}
    </>
  );
};

export default Astronaut;
