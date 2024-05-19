import { Post, PostResponse } from "src/types/types";

import { apiGetter, apiPoster } from "./interceptor";

export const getPosts = async ({ queryKey }: { queryKey: [string] }) => {
  const [,] = queryKey;
  const { data } = await apiGetter<Post>("/user/get");
  return data;
};

export const postPost = async (post: PostResponse) => {
  const { data } = await apiPoster<PostResponse>("/user/post", {
    method: "POST",
    data: post,
  });
  return data;
};
