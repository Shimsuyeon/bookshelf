import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import * as Three from "three";
import { TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
            <pointLight position={[200, 200, 200]} />
            <BookMesh />
          </Canvas>
        </Content>
      </Area>
    </>
  );
};

const BookMesh = () => {
  const boxRef = useRef<Three.Mesh>(null);
  const images = [
    "/images/front.png",
    "/images/spine.png", // 여기에 이미지 URL 입력
    "/images/back.png",
    "/images/papers.jpg",
  ];

  const textures = useLoader(TextureLoader, images);

  useFrame(() => {
    if (boxRef.current) {
      //boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[5, 10, 0.8]} />
      <meshStandardMaterial attach="material-0" map={textures[3]} />
      <meshStandardMaterial attach="material-1" map={textures[1]} />
      <meshStandardMaterial attach="material-2" map={textures[3]} />
      <meshStandardMaterial attach="material-3" map={textures[3]} />
      <meshStandardMaterial attach="material-4" map={textures[0]} />
      <meshStandardMaterial attach="material-5" map={textures[2]} />
    </mesh>
  );
};

export default BookPage;
