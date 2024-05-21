import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Burn from "./assets/Burn0.png";
const SectionContainerCol = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); // 전체화면시 약 700px?
  background-color: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
interface Roll1Props {
  innerRefArr: React.MutableRefObject<HTMLElement[]>;
}
const Edu0 = ({ innerRefArr }: Roll1Props) => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1.7, 0),
    1: useScrollFadeIn("up", 2.3, 0.5),
    2: useScrollFadeIn("left", 2.3, 1),
    3: useScrollFadeIn("right", 2.3, 1.5),
  };
  return (
    <SectionContainerCol
      style={{
        paddingBlock: "0px",
        minHeight: "90vh",
      }}
      ref={(el: HTMLDivElement | null) => {
        if (el !== null) {
          innerRefArr.current[0] = el;
        }
      }}
    >
      <Spacer height={"100px"} />
      <Flex flexDirection="column" width="350px">
        <div style={{ textAlign: "left", width: "100%" }}>
          <Icons.Quote style={{ transform: "scaleX(-1)" }} />
        </div>
        <Spacer height={"10px"} />
        <Text
          font={Font.Mapo}
          size={"2.5rem"}
          ref={animatedItem[0].ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem[0].style}
          textAlign="center"
        >
          번아웃과 시 창작
        </Text>
        <Spacer height={"10px"} />
        <div style={{ textAlign: "right", width: "100%" }}>
          <Icons.Quote />
        </div>
      </Flex>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.5rem"}
        ref={animatedItem[1].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[1].style}
      >
        김현아
      </Text>
      <Spacer height={"50px"} />
      <Image
        src={Burn}
        width={250}
        ref={animatedItem[2].ref as React.RefObject<HTMLImageElement>}
        style={animatedItem[2].style}
      />
      <Spacer height={"50px"} />
    </SectionContainerCol>
  );
};
export default Edu0;
