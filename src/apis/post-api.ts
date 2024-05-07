import { Post } from "src/types/types";

import { apiGetter } from "./interceptor";

export const getPosts = async ({ queryKey }: { queryKey: [string] }) => {
  const [,] = queryKey;
  const { data } = await apiGetter<Post>("/user/get");
  return data;
};
