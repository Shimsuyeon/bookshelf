import { useRef } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Spacer from "src/atoms/spacer/Spacer";

import Roll1 from "./Roll1";
import Roll2 from "./Roll2";
import Icons from "src/atoms/icon/Icon";

const BookStoryRoll = () => {
  const secRefArr = useRef([]);
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"100px"} />
        <Roll1 innerRefArr={secRefArr} />

        <Roll2 innerRefArr={secRefArr} />
        <Spacer height={"2000px"} />
      </Content>
    </Area>
  );
};

export default BookStoryRoll;
