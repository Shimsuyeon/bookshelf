import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Roll2 from "./assets/roll2.png";
const SectionContainerCol = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); // 전체화면시 약 700px?
  background-color: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

interface Roll1Props {
  innerRefArr: React.MutableRefObject<HTMLElement[]>;
}
const Roll1 = ({ innerRefArr }: Roll1Props) => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("left", 1.7, 1.5);

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
      <Spacer height={"100px"} />
      <Icons.Stars size={50} />

      <Spacer height={"100px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem0.style}
      >
        무릎을 굽히고 머리를 조아린다.
      </Text>
      <Spacer height={"20px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem1.style}
      >
        발을 떼고 구르는 동안 세상도 돈다.
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem2.style}
      >
        나에게 앞구르기는 세상과 교감하는 하나의 방법이다.
      </Text>
      <Spacer height={"30px"} />
      <Image
        src={Roll2}
        width={200}
        ref={animatedItem3.ref as React.RefObject<HTMLImageElement>}
        style={animatedItem3.style}
      />
      <Spacer height={"100px"} />
    </SectionContainerCol>
  );
};
export default Roll1;
