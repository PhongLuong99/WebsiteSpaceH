import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Stars = (props) => {
  const ref = useRef();
  const count = 20000; // số lượng sao
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 10 });

  // tạo brightness ngẫu nhiên cho mỗi sao
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const shade = 0.8 + Math.random() * 0.3; // từ 0.8 → 1.0
    colors[i * 3] = shade;
    colors[i * 3 + 1] = shade;
    colors[i * 3 + 2] = shade;
  }

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100;
    ref.current.rotation.y -= delta / 100;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} colors={colors} stride={4} frustumCulled {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.007}             // tăng size để nổi bật hơn
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <EffectComposer>
            <Bloom
              intensity={2.5}          // tăng sáng
              luminanceThreshold={0.0} // tất cả điểm đều có thể bloom
              luminanceSmoothing={0.95} // mượt hơn
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
