import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";

import Book from "./Book";

const BookShelfPage = () => {
  return (
    <>
      <Area backgroundColor="#ffd865ede">
        <Content>
          <Book
            bookCovers={{
              edge: "",
              spine: "/image/spine.jpeg",
              top: "",
              bottom: "",
              front: "/image/spine.jpeg",
              back: "./image/spine.jpeg",
            }}
            style={{
              width: 500,
              height: 600,
              background: "#ffffffece",
            }}
          />
        </Content>
      </Area>
    </>
  );
};

export default BookShelfPage;
