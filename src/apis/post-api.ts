import { Post, PostResponse } from "src/types/types";

import { apiGetter, apiPoster } from "./interceptor";

export const getPosts = async ({ queryKey }: { queryKey: [string] }) => {
  const [,] = queryKey;
  const { data } = await apiGetter<Post>("/user/get");
  return data;
};

export const postPost = async (props: {
  name: string;
  email: string;
  password: string;
  content: string;
}) => {
  const { data } = await apiPoster<PostResponse>("/user/post", props);
  return data;
};
