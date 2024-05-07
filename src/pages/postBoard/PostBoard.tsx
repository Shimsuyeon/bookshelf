import { useQuery } from "@tanstack/react-query";
import { getPosts } from "src/apis/post-api";
import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import QueryKeys from "src/types/query-keys";
const PostBoard = () => {
  const { data: info } = useQuery({
    queryKey: [QueryKeys.post],
    queryFn: getPosts,
  });
  console.log(info);
  return (
    <Area>
      <Content>
        <Flex height={"500px"} flexDirection="column">
          {Array.isArray(info) &&
            info.map((post, index) => (
              <>
                <Flex key={index} flexDirection="column">
                  <Text>{post.id}</Text>
                  <Text>{post.name}</Text>
                  <Text>{post.content}</Text>
                  <Text>{post.createdAt}</Text>
                </Flex>
                <Spacer height={"20px"} />
              </>
            ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default PostBoard;
