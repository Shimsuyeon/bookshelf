import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Burn from "./assets/Burn1.png";
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
const Burn1 = ({ innerRefArr }: Roll1Props) => {
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
        두 학기 동안 나는 &apos;잠이 드는 것&apos;을 무서워했다.
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem1.style}
      >
        잠드는 게 무서워 잠을 잘 자지 못하다보니 하루 종일 피곤했고
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem2.style}
      >
        피로를 이겨내려 카페인 음료를 최소 두 잔씩 마셨다.
      </Text>
      <Spacer height={"100px"} />
      <Image
        src={Burn}
        width={300}
        ref={animatedItem3.ref as React.RefObject<HTMLImageElement>}
        style={animatedItem3.style}
      />
      <Spacer height={"150px"} />
    </SectionContainerCol>
  );
};
export default Burn1;
