import { useQuery } from "@tanstack/react-query";
import { getPosts } from "src/apis/post-api";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import QueryKeys from "src/types/query-keys";
const PostBoard = () => {
  const { data: info } = useQuery({
    queryKey: [QueryKeys.post],
    queryFn: getPosts,
  });
  console.log(info);
  const formatCreatedAt = (createdAt: string): string => {
    const date = new Date(createdAt);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return formattedDate;
  };

  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Flex justifyContent="center" style={{ padding: "20px" }}>
          <Text font={Font.Mapo} size={"1.5rem"}>
            소감 게시판
          </Text>
        </Flex>
        <Flex></Flex>
        <Flex height={"500px"} flexDirection="row">
          {Array.isArray(info) &&
            info.map((post, index) => (
              <>
                <Flex key={index} flexDirection="column">
                  <Button
                    variant={ButtonVariant.postItem}
                    style={{ padding: "15px" }}
                  >
                    <Grid gridTemplateColumns="1fr 1fr" gap="10px">
                      <Text font={Font.Mapo} textAlign="left" size={"1.1rem"}>
                        {post.name}님의 한 마디
                      </Text>
                      <Text font={Font.Mapo} size={"0.8rem"} textAlign="right">
                        {formatCreatedAt(post.createdAt)}
                      </Text>
                    </Grid>
                    <Spacer height={"10px"} />
                    <Text font={Font.Mapo} textAlign="left">
                      {post.content}
                    </Text>
                  </Button>
                </Flex>
                <Spacer height={"20px"} />
              </>
            ))}
        </Flex>
        <Spacer height={"500px"} />
      </Content>
    </Area>
  );
};

export default PostBoard;
