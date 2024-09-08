import { useRef } from "react";
import { useScroll, useTransform } from 'framer-motion';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Float,
} from "@react-three/drei";
import { motion as motion3d } from "framer-motion-3d";
import styl from './index.module.styl';

// Modelコンポーネントを修正
const Model = ({ 
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scrollYProgress
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
  scrollYProgress: any;
}) => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  // スクロールに応じて回転を変更
  const rotationX = useTransform(scrollYProgress, [0, 1], [0, Math.PI  * 1.5]);
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * .8]);
  return (
    <motion3d.group ref={group as any} rotation-x={rotationX} rotation-y={rotationY}>
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </motion3d.group>
  );
};

export default function ThreeScene() {

  const { scrollYProgress } = useScroll();

  return (
    <div className={styl.canvasModel}>
      <Canvas camera={{position: [30,30,10], fov:150}}>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <Float
          speed={1}
          rotationIntensity={2}
          floatIntensity={1}
          floatingRange={[-0.1,0.1]}
        >
          <Model 
            url="/3dModels/Island/island_optimized-draco.glb" 
            scale={0.5} 
            position={[0, 0, 0]} 
            rotation={[0,0,0]} 
            scrollYProgress={scrollYProgress}
          />
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}