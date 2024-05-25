import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import Paths from "src/types/paths";
import styled from "styled-components";

import Edu from "./assets/Edu3.png";
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
    4: useScrollFadeIn("right", 2.3, 2),
  };
  const navigate = useNavigate();
  return (
    <SectionContainerCol
      style={{
        paddingBlock: "0px",
        minHeight: "70vh",
      }}
      ref={(el: HTMLDivElement | null) => {
        if (el !== null) {
          innerRefArr.current[2] = el;
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
        앞으로 대학 생활로 채워나갈 테트리스 판,
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[1].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[1].style}
      >
        혹은 여태까지 해온 대학생활을 통해 메운 테트리스 판은
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[2].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[2].style}
      >
        어땠는지 떠올리면 좋겠다.
      </Text>
      <Spacer height={"50px"} />
      <Image
        src={Edu}
        width="300px"
        ref={animatedItem[3].ref as React.RefObject<HTMLImageElement>}
        style={animatedItem[3].style}
      />
      <Spacer height={"100px"} />
      <Button onClick={() => navigate(Paths.booklist)}>
        <Text
          font={Font.Mapo}
          size="1.3rem"
          color="gray"
          ref={animatedItem[4].ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem[4].style}
        >
          목록으로 →
        </Text>
      </Button>
    </SectionContainerCol>
  );
};
export default Roll2;
