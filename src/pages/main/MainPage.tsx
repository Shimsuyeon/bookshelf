import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Text from "src/atoms/text/Text";
const MainPage = () => {
  const navigate = useNavigate();
  const Book = () => {
    navigate("/books");
  };
  return (
    <>
      <Area backgroundColor={"#797aab"}>
        <Content>
          <div className="bookshelf">
            <div className="books"></div>
          </div>
          <Button onClick={Book}>
            <Text>책장으로</Text>
          </Button>
        </Content>
      </Area>
    </>
  );
};

export default MainPage;
