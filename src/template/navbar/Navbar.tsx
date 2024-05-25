import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import Paths from "src/types/paths";
import styled from "styled-components";

const Bar = styled.div<{ bgColor: string }>`
  position: fixed; /* Changed from absolute to fixed */
  top: 0; /* Ensure it sticks to the top */
  left: 0; /* Aligns bar to the left edge of the viewport */
  right: 0; /* Ensures the bar stretches across the width of the viewport */
  position: absolute;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};

  box-sizing: border-box;
  padding: 0.3rem 1rem;
  z-index: 1;
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Bar bgColor={"transparent"}>
      <Button onClick={() => navigate(Paths.main)}>
        <Text font={Font.GmarketSans}>글의 시각화</Text>
      </Button>
      <Flex gap={"20px"}>
        <Button onClick={() => navigate(Paths.projectInfo)}>
          <Text font={Font.GmarketSans}>소개</Text>
        </Button>
        <Button onClick={() => navigate(Paths.bookTotal)}>
          <Text font={Font.GmarketSans}>책장</Text>
        </Button>
        <Button onClick={() => navigate(Paths.post)}>
          <Text font={Font.GmarketSans}>소감 게시판</Text>
        </Button>
      </Flex>
    </Bar>
  );
};

export default Navbar;
