import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";

import BookMain from "./assets/bookMain3.png";

// Assuming you have these types defined somewhere in your project
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

const MainPage: React.FC = () => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1);
  const navigate = useNavigate();

  return (
    <>
      <Area backgroundColor="#fffff0">
        <Content>
          <Spacer height="200px" />
          <Flex alignItems="center" justifyContent="center">
            <Flex flexDirection="column">
              <Spacer height="100px" />
              <Text
                font={Font.Mapo}
                size="4rem"
                ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem0.style}
              >
                글의 시각화
              </Text>
              <Spacer height="30px" />
              <Text
                font={Font.Mapo}
                size="1.5rem"
                ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem1.style}
              >
                책은 이를 펴보지 않으면 나무와 같다
              </Text>
            </Flex>
            <Spacer width="100px" />
            <Flex flexDirection="column" alignItems="center">
              <Image
                src={BookMain}
                width="200px"
                ref={animatedItem2.ref as React.RefObject<HTMLImageElement>}
                style={animatedItem2.style}
                onClick={() => navigate("/books")}
              />
              <Spacer height="20px" />
              <Text font={Font.Mapo} color="gray">
                책을 클릭해 보세요 →
              </Text>
            </Flex>
          </Flex>
          <Spacer height="200px" />
        </Content>
      </Area>
    </>
  );
};

export default MainPage;
