import Icons from "src/atoms/icon/Icon";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";
import Roll from "./assets/roll.png";
import Image from "src/atoms/image/Image";
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
const Roll2 = ({ innerRefArr }: Roll1Props) => {
  const animatedItem = {
    0: useScrollFadeIn("left", 2.3, 0),
    1: useScrollFadeIn("leftUp", 2.3, 0.5),
    2: useScrollFadeIn("left", 2.3, 1),
    3: useScrollFadeIn("right", 2.3, 1.5),
  };
  return (
    <SectionContainerCol
      style={{
        paddingBlock: "0px",
        minHeight: "70vh",
      }}
      ref={(el: HTMLDivElement | null) => {
        if (el !== null) {
          innerRefArr.current[1] = el;
        }
      }}
    >
      <Icons.Stars size={50} />
      <Spacer height={"100px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[0].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[0].style}
      >
        아무에게도 해를 끼치지 않고
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[1].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[1].style}
      >
        세상을 한 바퀴 뒤집었다 되돌렸다는 것이
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[2].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[2].style}
      >
        마음에 들었다.
      </Text>
      <Spacer height={"50px"} />
      <Image
        src={Roll}
        width="200px"
        ref={animatedItem[3].ref as React.RefObject<HTMLImageElement>}
        style={animatedItem[3].style}
      />
    </SectionContainerCol>
  );
};
export default Roll2;
