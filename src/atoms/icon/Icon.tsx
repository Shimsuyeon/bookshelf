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
const Quote = ({ size = 30, style, color = "black" }: IconsProps) => {
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

const Stars = ({ size = 30, style, color = "black" }: IconsProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 63 27"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 0L34.0774 10.9226L45 13.5L34.0774 16.0774L31.5 27L28.9226 16.0774L18 13.5L28.9226 10.9226L31.5 0Z"
        fill={color}
      />
      <path
        d="M56.5 7L57.741 12.259L63 13.5L57.741 14.741L56.5 20L55.259 14.741L50 13.5L55.259 12.259L56.5 7Z"
        fill={color}
      />
      <path
        d="M6.5 7L7.74097 12.259L13 13.5L7.74097 14.741L6.5 20L5.25903 14.741L0 13.5L5.25903 12.259L6.5 7Z"
        fill={color}
      />
    </svg>
  );
};

const Lock = ({ size = 30, style, color = "gray" }: IconsProps) => {
  return (
    <svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.77759 19.3199V12.9138C4.77759 11.903 5.59704 11.0835 6.60789 11.0835H17.5897C18.6006 11.0835 19.42 11.903 19.42 12.9138V19.3199C19.42 20.3307 18.6006 21.1502 17.5897 21.1502H6.60789C5.59704 21.1502 4.77759 20.3307 4.77759 19.3199Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.60791 11.0834L6.60791 8.33795C6.60791 5.30541 9.06628 2.84705 12.0988 2.84705V2.84705C15.1314 2.84705 17.5897 5.30541 17.5897 8.33795V11.0834"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 15L12 17"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
};

Icons.Quote = Quote;
Icons.Stars = Stars;
Icons.Lock = Lock;

export default Icons;
