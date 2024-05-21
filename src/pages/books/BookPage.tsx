import { OrbitControls } from "@react-three/drei";
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
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import { Mesh, TextureLoader } from "three";

// Extend OrbitControls into @react-three/fiber
extend({ OrbitControls });

const BookPage = () => {
  return (
    <>
      <Area backgroundColor="#fffff0">
        <Content>
          <Flex
            style={{
              zIndex: 2,
              position: "absolute",
              left: "50%",
              top: "100px",
              width: "100%",
            }}
          >
            <Text
              font={Font.Mapo}
              color={"black"}
              style={{
                textAlign: "center",
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
                backgroundColor: "#fffff0",
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
    navigate("/booklist");
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
  // No longer ignore TypeScript, corrected component name
  return <OrbitControls args={[camera, gl.domElement]} />;
};

export default BookPage;
