export const MOBILE_BREAKPOINT = "768px";

export interface Point {
  x: number;
  y: number;
}

export const GRID_ORIGIN = 200;

export interface GridComponents {
  outputGrid: number[][];
  selectedCells: Cell[];
  selectedGridDimensions: {
    rotationParity: number;
  };
  size: {
    n: number;
    m: number;
  };
}

export interface Cell {
  x: number;
  y: number;
  color: number;
}

export interface TaskImageResponse {
  id: number;
  taskName: string;
  image: string;
}

export interface TaskImage {
  id: number;
  taskName: string;
  image: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
}

export interface Post {
  id: number;
  email: number;
  name: string;
  content: string;
  created_at: string;
}

export interface PostResponse {
  email: string;
  name: string;
  password: string;
  content: string;
}

export interface deletePostResponse {
  id: number;
  password: string;
}
