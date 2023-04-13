import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef, useState, useEffect } from "react";

const ThreeDModel = ({ className, file }) => {
  const Model = () => {
    const group = useRef();
    const [targetRotation, setTargetRotation] = useState([0, 0, 0]);
    const [currentRotation, setCurrentRotation] = useState([0, 0, 0]);

    const gltf = useLoader(GLTFLoader, file);

    useFrame(({ mouse }) => {
      setTargetRotation([(mouse.y * -Math.PI) / 8, (mouse.x * Math.PI) / 8, 0]);
    });

    useEffect(() => {
      const updateRotation = () => {
        setCurrentRotation((currentRotation) =>
          currentRotation.map(
            (value, index) => value + 0.3 * (targetRotation[index] - value)
          )
        );
      };

      const frameId = requestAnimationFrame(updateRotation);
      return () => cancelAnimationFrame(frameId);
    }, [targetRotation]);

    return (
      <group
        // ref={group}
        rotation={currentRotation}
        position={[0, 1, 0]}
        scale={[1, 1, 1]}
      >
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    );
  };

  return (
    <div className={className}>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          {/* <Environment preset="apartment" blur={1} rotation={[20, 90, 20]} /> */}
          <pointLight color={"#954ea4"} intensity={20} position={[0, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
