import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import { Mesh, TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Extend OrbitControls into @react-three/fiber
extend({ OrbitControls });

// Type definitions for props or states can be defined here if needed
// For example, define types for your image array or any props you expect to receive

const BookPage = () => {
  return (
    <>
      <Area backgroundColor="#3b3b3b">
        <Content>
          <Flex
            style={{
              zIndex: 2,
              position: "absolute",
              left: "50%",
              top: "20px",
              width: "100%",
            }}
          >
            <Text
              font={Font.Mapo}
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              책을 클릭해보세요
            </Text>
          </Flex>
          <Flex style={{ zIndex: -1 }}>
            <Canvas
              camera={{ position: [-20, 0, 0], fov: 45 }}
              style={{
                width: "1400px",
                height: "1080px",
                backgroundColor: "#3b3b3b",
              }}
            >
              <ambientLight />
              <pointLight position={[-20, 200, 200]} />
              <Controls />
              <BookMesh />
            </Canvas>
          </Flex>
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
  const navigate = useNavigate();
  const move = () => {
    navigate("/bookdetail");
  };
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <mesh ref={boxRef} onClick={move}>
      <boxGeometry args={[5, 8, 0.6]} />
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
