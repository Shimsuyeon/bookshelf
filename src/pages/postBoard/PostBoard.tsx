import { useMutation, useQuery } from "@tanstack/react-query";
import { getPosts, postPost } from "src/apis/post-api";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import QueryKeys from "src/types/query-keys";
import styled from "styled-components";
const InputStyle = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  font-family: MapoGoldenPier;
`;

const TextareaStyle = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: none;
  background-color: transparent;
  font-family: MapoGoldenPier;
`;
const PostBoard = () => {
  const { data: info } = useQuery({
    queryKey: [QueryKeys.post],
    queryFn: getPosts,
  });

  const PostPost = useMutation({
    mutationFn: postPost,
    onSuccess: () => {
      console.log("success");
    },
  });

  const formatCreatedAt = (createdAt: string): string => {
    const date = new Date(createdAt);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
    return formattedDate;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.nickname.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const content = e.currentTarget.feedback.value;

    PostPost.mutate({
      name,
      email,
      password,
      content,
    });
  };

  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Flex justifyContent="center" style={{ padding: "20px" }}>
          <Text font={Font.Mapo} size={"1.5rem"}>
            소감 게시판
          </Text>
        </Flex>
        <form onSubmit={handleSubmit}>
          <Flex justifyContent="center">
            <Button variant={ButtonVariant.postItem} width={"100%"}>
              <Grid gridTemplateColumns="1fr 1fr 1fr 0.5fr" gap="10px">
                <InputStyle name={"nickname"} placeholder="닉네임" required />
                <InputStyle name={"email"} placeholder="이메일" />
                <InputStyle
                  type="password"
                  placeholder="비밀번호"
                  name={"password"}
                />
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Text font={Font.Mapo} size={"1rem"}>
                    등록
                  </Text>
                </Button>
              </Grid>

              <Spacer height={"10px"} />
              <TextareaStyle
                placeholder="소감을 남겨주세요."
                name={"feedback"}
              />
            </Button>
          </Flex>
        </form>

        <Spacer height={"20px"} />
        <Flex height={"500px"} flexDirection="row">
          <Grid gridTemplateColumns="1fr">
            {Array.isArray(info) &&
              info.map((post, index) => (
                <>
                  <Flex key={index} flexDirection="column">
                    <Button variant={ButtonVariant.postItem} width={"100%"}>
                      <Grid gridTemplateColumns="1fr 1fr" gap="10px">
                        <Text font={Font.Mapo} textAlign="left" size={"1.1rem"}>
                          {post.name}님의 한 마디
                        </Text>
                        <Text
                          font={Font.Mapo}
                          size={"0.8rem"}
                          textAlign="right"
                        >
                          {formatCreatedAt(post.createdAt)}
                        </Text>
                      </Grid>
                      <Text font={Font.Mapo} textAlign="left">
                        {post.content}
                      </Text>
                    </Button>
                  </Flex>
                  <Spacer height={"20px"} />
                </>
              ))}
          </Grid>
        </Flex>
        <Spacer height={"500px"} />
      </Content>
    </Area>
  );
};

export default PostBoard;
