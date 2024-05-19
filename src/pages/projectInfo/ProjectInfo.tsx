import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icon";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";

type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};
const ProjectInfoPage = () => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("down", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.8);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.6);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 2.4);
  const animatedItem4: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 3.2);
  const animatedItem5: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 4);
  const animatedItem6: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 4.8);
  const navigate = useNavigate();
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"100px"} />
        <Flex flexDirection="column" width="400px">
          <div style={{ textAlign: "left", width: "100%" }}>
            <Icons.Quote style={{ transform: "scaleX(-1)" }} />
          </div>
          <Spacer height={"10px"} />
          <Text
            font={Font.Mapo}
            size={"3rem"}
            ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem0.style}
            textAlign="center"
          >
            글의 시각화
          </Text>
          <Spacer height={"10px"} />
          <div style={{ textAlign: "right", width: "100%" }}>
            <Icons.Quote />
          </div>
        </Flex>

        <Spacer height={"30px"} />

        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem1.style}
        >
          이 프로젝트는 소설의 구절을 짧은 글과 그림, 그리고 생동감 있는 CSS
          효과로 표현합니다.
        </Text>
        <Spacer height={"20px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem2.style}
        >
          문학을 새로운 시각으로 경험하고, 작가의 의도를 더 깊게 이해할 수
          있습니다.
        </Text>
        <Spacer height={"20px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem3.style}
        >
          책 '지스트의 온도'의 문장을 시각적으로 경험하며 상상의 폭을
          넓혀보세요.
        </Text>
        <Spacer height={"20px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem4.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem4.style}
        >
          글과 그래픽, 애니메이션을 통해 새로운 문학의 깊이를 경험할 수
          있습니다.
        </Text>

        <Spacer height={"20px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem5.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem5.style}
        ></Text>
        <Spacer height={"20px"} />
        <Button onClick={() => navigate("/booklist")}>
          <Text
            font={Font.Mapo}
            size="1.3rem"
            color="gray"
            ref={animatedItem6.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem6.style}
          >
            목록으로 →
          </Text>
        </Button>
        <Spacer height={"500px"} />
      </Content>
    </Area>
  );
};
export default ProjectInfoPage;
