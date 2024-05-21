import { useRef } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Spacer from "src/atoms/spacer/Spacer";

import Roll0 from "./Roll0";
import Roll1 from "./Roll1";
import Roll2 from "./Roll2";

const BookStoryRoll = () => {
  const secRefArr = useRef([]);
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"20px"} />
        <Roll0 innerRefArr={secRefArr} />
        <Roll1 innerRefArr={secRefArr} />

        <Roll2 innerRefArr={secRefArr} />
        <Spacer height={"200px"} />
      </Content>
    </Area>
  );
};

export default BookStoryRoll;
