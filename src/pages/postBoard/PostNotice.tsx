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
  font-size: 0.95rem;
  line-height: 1.5;
  font-family: "MapoGoldenPier";
`;

const PostNotice = () => {
  return (
    <NoticeContainer>
      <Text size="1rem" font={Font.Mapo} style={{ lineHeight: 1.5 }}>
        * 공지사항 *
      </Text>
      <NoticeList>
        <NoticeItem>
          책 &apos;지스트 온도&apos;에 대한 감상평, 또는 &apos;글의 시각화&apos;
          페이지 감상 후기를 남겨주세요.
        </NoticeItem>
        <NoticeItem>
          우수 소감을 선정해 GIST 도서관 카페 쿠폰을 드립니다. (기한:
          2024.05.25. ~ 2024.06.01.)
        </NoticeItem>
        <NoticeItem>
          이벤트 상품의 정확한 전달을 위해, 실제로 사용 중인 GIST 메일 계정을
          입력해주세요. (gm.gist.ac.kr 또는 gist.ac.kr)
        </NoticeItem>
        <NoticeItem>
          부적절한 발언이 포함된 글은 통보 없이 삭제될 수 있습니다.
        </NoticeItem>
        <NoticeItem>
          모든 페이지는 PC를 기준으로 제작되었습니다. 모바일 환경에서는
          레이아웃이 일부 변동될 수 있습니다.
        </NoticeItem>
      </NoticeList>
    </NoticeContainer>
  );
};

export default PostNotice;
