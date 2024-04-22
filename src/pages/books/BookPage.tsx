import { useRef } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";

// Extend OrbitControls into @react-three/fiber
extend({ OrbitControls });

// Type definitions for props or states can be defined here if needed
// For example, define types for your image array or any props you expect to receive

const BookPage = () => {
  return (
    <>
      <Area>
        <Content>
          <Canvas
            camera={{ position: [-20, 0, 0], fov: 45 }}
            style={{
              width: "1000px",
              height: "1000px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <ambientLight />
            <pointLight position={[-20, 200, 200]} />
            <Controls />
            <BookMesh />
          </Canvas>
        </Content>
      </Area>
    </>
  );
};

const BookMesh = () => {
  const boxRef = useRef<Mesh>(null);
  const images = [
    "/images/front.png",
    "/images/spine.png",
    "/images/back.png",
    "/images/papers.jpg",
  ];

  const textures = useLoader(TextureLoader, images);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[5, 8, 0.8]} />
      <meshStandardMaterial attach="material-0" map={textures[3]} />
      <meshStandardMaterial attach="material-1" map={textures[1]} />
      <meshStandardMaterial attach="material-2" map={textures[3]} />
      <meshStandardMaterial attach="material-3" map={textures[3]} />
      <meshStandardMaterial attach="material-4" map={textures[0]} />
      <meshStandardMaterial attach="material-5" map={textures[2]} />
    </mesh>
  );
};

const Controls = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

export default BookPage;
