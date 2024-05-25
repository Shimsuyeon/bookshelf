import { useRef } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Spacer from "src/atoms/spacer/Spacer";

import Edu0 from "./Roll0";
import Edu1 from "./Roll1";
import Edu2 from "./Roll2";
const BookFriendPage = () => {
  const secRefArr = useRef([]);
  return (
    <Area>
      <Content>
        <Spacer height={"20px"} />
        <Edu0 innerRefArr={secRefArr} />
        <Edu1 innerRefArr={secRefArr} />

        <Edu2 innerRefArr={secRefArr} />
        <Spacer height={"200px"} />
      </Content>
    </Area>
  );
};

export default BookFriendPage;
