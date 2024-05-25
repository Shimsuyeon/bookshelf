import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Photo from "src/pages/bookList/assets/Photo.png";
import Font from "src/styles/fonts";
import Paths from "src/types/paths";
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

const BookListPage = () => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem01: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.3);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.7);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.9);
  const animatedItem4: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.1);
  const animatedItem5: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.3);
  const animatedItem6: ScrollFadeInProps = useScrollFadeIn("down", 1.7, 0.5);
  const animatedItem7: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.5);
  const animatedItem8: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.7);
  const animatedItem9: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.9);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"200px"} />
        <Flex alignItems="center" justifyContent="center">
          <Flex
            flexDirection="column"
            gap="20px"
            justifyContent="start"
            alignItems="start"
          >
            <Text
              font={Font.Mapo}
              size="3rem"
              ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem0.style}
            >
              목차
            </Text>
            <Spacer height={"20px"} />
            <Button onClick={() => navigate(Paths.projectInfo)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={
                  animatedItem01.ref as React.RefObject<HTMLParagraphElement>
                }
                style={animatedItem01.style}
              >
                0. 프로젝트 소개
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookinfo)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem1.style}
              >
                1. 책 소개_지스트의 온도
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookRoll)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem2.style}
              >
                2. 앞구르기_김현아
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookEdu)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem3.style}
                textAlign="start"
              >
                3. 당신이 교육봉사를 해야 하는 이유_심수연
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookBurnout)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem4.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem4.style}
              >
                4. 번아웃과 시 창작_김현아
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookJournal)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem5.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem5.style}
              >
                5. 저널리더(Journal-leader)_이은찬
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookTetris)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem7.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem7.style}
              >
                6. 테트리스_최승규
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookPraise)}>
              <Text
                font={Font.Mapo}
                textAlign="start"
                size="1.8rem"
                ref={animatedItem8.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem8.style}
              >
                7. 좋은 칭찬은 좋은 비판보다 어려우니_이수민
              </Text>
            </Button>
            <Button onClick={() => navigate(Paths.bookFriend)}>
              <Text
                font={Font.Mapo}
                size="1.8rem"
                ref={animatedItem9.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem9.style}
              >
                8. 친구의 의미_윤세림
              </Text>
            </Button>
          </Flex>
          <Spacer width={"30px"} />
          <Flex
            width="250px"
            height="250px"
            alignItems="center"
            justifyContent="center"
          >
            <Spacer height={"50px"} />
            <Image
              src={Photo}
              width="100%"
              ref={animatedItem6.ref as React.RefObject<HTMLImageElement>}
              style={animatedItem6.style}
            />
          </Flex>
        </Flex>
        <Spacer height={"200px"} />
      </Content>
    </Area>
  );
};
export default BookListPage;
