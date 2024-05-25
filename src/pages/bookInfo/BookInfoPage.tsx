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
const BookInfoPage = () => {
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
            지스트의 온도
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
          우리가 학교에서 경험한 모든 것은 지금의 나를 만드는 중요한 요소입니다.
        </Text>
        <Spacer height={"30px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem2.style}
        >
          하지만, 직접 학교에 다녀보기 전에는 어떤 경험을 할 수 있는지 알기
          어렵습니다.
        </Text>
        <Spacer height={"30px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem3.style}
        >
          팀 GISTair는 선배들의 시행착오를 기록으로 남겨 후배들에게 전해주고자
          했습니다.
        </Text>
        <Spacer height={"30px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem4.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem4.style}
        >
          어떤 구성원들이 학교를 만들어 왔는지, 어떤 사람들과 함께 학교를 만들게
          될지 알려주고 싶었습니다.
        </Text>

        <Spacer height={"30px"} />
        <Text
          font={Font.Mapo}
          size={"1.2rem"}
          ref={animatedItem5.ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem5.style}
        >
          GIST에서 경험한 학교생활을 수필, 시, 만화 등 다양한 형식으로 진솔하게
          담아냈습니다.
        </Text>
        <Spacer height={"30px"} />
        <Button onClick={() => navigate(Paths.booklist)}>
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
export default BookInfoPage;
