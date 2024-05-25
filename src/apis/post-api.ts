import { deletePostResponse, Post, PostResponse } from "src/types/types";

import { apiDeleter, apiGetter, apiPoster } from "./interceptor";

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

export const deletePost = async ({
  id,
  password,
}: {
  id: number;
  password: string;
}) => {
  console.log(id, password);
  const { data } = await apiDeleter<deletePostResponse>("/user/delete", {
    id,
    password,
  });

  return data;
};
