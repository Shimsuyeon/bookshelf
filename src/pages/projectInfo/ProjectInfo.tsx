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
import Paths from "src/types/paths";

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
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
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
            textAlign="start"
            size={"1.2rem"}
            ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem1.style}
          >
            이 프로젝트는 책을 새로운 시선으로 바라보는 디지털 전시관입니다.
          </Text>
          <Spacer height={"30px"} />
          <Text
            font={Font.Mapo}
            textAlign="start"
            size={"1.2rem"}
            ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem2.style}
          >
            소설의 구절을 짧은 글과 그림,그리고 애니메이션으로 표현하였습니다.
          </Text>
          <Spacer height={"30px"} />
          <Text
            font={Font.Mapo}
            size={"1.2rem"}
            textAlign="center"
            ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem3.style}
          >
            첫 번째 프로젝트, 책 &apos;지스트의 온도&apos;를 시각적으로
            경험하며,
          </Text>
          <Spacer height={"30px"} />
          <Text
            font={Font.Mapo}
            size={"1.2rem"}
            textAlign="center"
            ref={animatedItem4.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem4.style}
          >
            작가의 의도를 새로운 시선으로 느껴보세요.
          </Text>

          <Spacer height={"30px"} />
          <Text
            font={Font.Mapo}
            size={"1.2rem"}
            ref={animatedItem5.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem5.style}
          >
            여러분의 다양한 관람 소감을 소감 게시판에 남겨주세요.
          </Text>
          <Spacer height={"50px"} />
          <Text
            font={Font.Mapo}
            color="gray"
            size={"1rem"}
            ref={animatedItem6.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem6.style}
          >
            * 문의 사항은 suyeonshim@gm.gist.ac.kr에 남겨주세요.
          </Text>
          {/* <Button onClick={() => navigate(Paths.booklist)}>
            <Text
              font={Font.Mapo}
              size="1.3rem"
              color="gray"
              textAlign="center"
              ref={animatedItem6.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem6.style}
            >
              목록으로 →
            </Text>
          </Button> */}
        </Flex>
      </Content>
    </Area>
  );
};
export default ProjectInfoPage;
