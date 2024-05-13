import colorSet from "src/styles/colorSet";
import { CSSProperties } from "styled-components";

interface IconsProps {
  size?: CSSProperties["width"];
  color?: CSSProperties["color"];
  style?: CSSProperties;
  subcolor?: CSSProperties["color"];
}

const Icons = () => {
  return <></>;
};
const Quote = ({ size = 30, style, color = "inherit" }: IconsProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 63 38"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.6208 0H41.0013C37.7675 0 35.1439 1.78629 35.1439 3.988V14.6227C35.1439 16.8244 37.7675 18.6107 41.0013 18.6107H50.7635V23.928C50.7635 26.8608 47.2613 29.2453 42.9537 29.2453H41.9775C40.3545 29.2453 39.0488 30.1343 39.0488 31.2393V35.2273C39.0488 36.3323 40.3545 37.2213 41.9775 37.2213H42.9537C53.7409 37.2213 62.4781 31.2726 62.4781 23.928V3.988C62.4781 1.78629 59.8545 0 56.6208 0ZM21.4768 0H5.85732C2.62359 0 0 1.78629 0 3.988V14.6227C0 16.8244 2.62359 18.6107 5.85732 18.6107H15.6195V23.928C15.6195 26.8608 12.1173 29.2453 7.80976 29.2453H6.83354C5.21058 29.2453 3.90488 30.1343 3.90488 31.2393V35.2273C3.90488 36.3323 5.21058 37.2213 6.83354 37.2213H7.80976C18.597 37.2213 27.3342 31.2726 27.3342 23.928V3.988C27.3342 1.78629 24.7106 0 21.4768 0Z"
        fill={color}
      />
    </svg>
  );
};

Icons.Quote = Quote;

export default Icons;
