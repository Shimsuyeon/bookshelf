import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/fonts";
import styled from "styled-components";

const NoticeContainer = styled.div`
  border: 2px dashed ${colorSet.outlines};
  color: gray;
  padding: 20px;
  background-color: #fffff0;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NoticeList = styled.ol`
  margin: 0;
  padding-left: 20px;
`;

const NoticeItem = styled.li`
  margin-bottom: 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: "MapoGoldenPier";
`;

const PostNotice = () => {
  return (
    <NoticeContainer>
      <Text size="1rem" font={Font.Mapo} style={{ lineHeight: 1.5 }}>
        * 작성 시 주의사항
      </Text>
      <NoticeList>
        <NoticeItem>
          우수 소감을 선정해 GIST 도서관 카페 쿠폰을 드립니다.
        </NoticeItem>
        <NoticeItem>
          이벤트 상품의 정확한 전달을 위해, 실제로 사용 중인 GIST 메일 계정을
          입력해주세요.
        </NoticeItem>
        <NoticeItem>
          부적절한 발언이 포함된 글은 통보 없이 삭제될 수 있습니다.
        </NoticeItem>
      </NoticeList>
    </NoticeContainer>
  );
};

export default PostNotice;
