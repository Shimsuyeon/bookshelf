import { useRef } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Spacer from "src/atoms/spacer/Spacer";

import Burn0 from "./Burn0";
import Burn1 from "./Burn1";
import Burn2 from "./Burn2";

const BookStoryBurnout = () => {
  const secRefArr = useRef([]);
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"20px"} />
        <Burn0 innerRefArr={secRefArr} />
        <Burn1 innerRefArr={secRefArr} />

        <Burn2 innerRefArr={secRefArr} />
        <Spacer height={"200px"} />
      </Content>
    </Area>
  );
};

export default BookStoryBurnout;
