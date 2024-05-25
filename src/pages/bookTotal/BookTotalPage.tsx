import GISTONDO from "public/images/front.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import Paths from "src/types/paths";
import styled from "styled-components";

const Shelf = styled.div`
  background-color: #f5deb3;
  height: 5px; // 문자열 제거
  width: 600px; // 문자열 제거
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecretBook = styled.div`
  background-color: #ffffff;
  height: 230px;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const handleSecret = () => {
  toast.error("추후 공개 예정입니다.");
};
const SecretBookCover = () => {
  return (
    <SecretBook onClick={handleSecret}>
      <Text font={Font.Mapo} size="1rem">
        <Icons.Lock />
      </Text>
    </SecretBook>
  );
};
const BookTotalPage = () => {
  const navigate = useNavigate();
  const handleBook = () => {
    navigate(Paths.books);
  };

  return (
    <Area>
      <Content>
        <Flex flexDirection="column" alignItems="center">
          <Spacer height="100px" />
          <Text font={Font.Mapo} size="2rem">
            서사의 항해
          </Text>
          <Spacer height="80px" /> {/* 추가된 Spacer */}
          <Flex justifyContent="center" gap={"30px"}>
            <Image src={GISTONDO} width="150px" onClick={handleBook} />
            <SecretBookCover />
            <SecretBookCover />
          </Flex>
          <Shelf />
          <Spacer height="50px" />
          <Flex justifyContent="center" gap={"30px"}>
            <SecretBookCover />
            <SecretBookCover />
            <SecretBookCover />
          </Flex>
          <Shelf />
          <Spacer width="200px" />
        </Flex>
      </Content>
    </Area>
  );
};
export default BookTotalPage;
