import BookCover from "public/images/front.png";
import { useEffect, useState } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
const FirstStoryPage = () => {
  // 텍스트의 가시성 상태를 관리합니다.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100; // 100px 이상 스크롤됐을 때 텍스트를 보여줍니다.
      if (show) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너를 등록합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 정리합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Area backgroundColor="#3b3b3b">
      <Content></Content>
    </Area>
  );
};

export default FirstStoryPage;
