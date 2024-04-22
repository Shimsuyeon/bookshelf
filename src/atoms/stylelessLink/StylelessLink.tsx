import { Link } from "react-router-dom";
import styled from "styled-components";

const StylelessLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  line-height: 1;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export default StylelessLink;
