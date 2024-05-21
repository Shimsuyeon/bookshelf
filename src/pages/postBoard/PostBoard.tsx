import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";
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
  height: 100px;
  border: none;
  background-color: transparent;
  font-family: MapoGoldenPier;
`;

const PostBoard = () => {
  const { data: info, refetch } = useQuery({
    queryKey: [QueryKeys.post],
    queryFn: getPosts,
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const PostPost = useMutation({
    mutationFn: postPost,
    onSuccess: () => {
      toast.success("등록되었습니다.");
      console.log("success");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      if (contentRef.current) contentRef.current.value = "";
      refetch();
    },
    onError: (error) => {
      const messages = (error as any).response.data.message;
      messages.forEach((msg: string) => {
        if (msg === "name must be longer than or equal to 2 characters") {
          toast.error("닉네임은 2~20자 사이로 입력해주세요.");
        } else if (msg === "email must be an email") {
          toast.error("유효한 이메일 주소를 입력해주세요.");
        } else if (
          msg === "password must be longer than or equal to 4 characters"
        ) {
          toast.error("비밀번호는 4자 이상이어야 합니다.");
        } else if (
          msg === "content must be longer than or equal to 2 characters"
        ) {
          toast.error("내용은 2자 이상 입력해주세요.");
        } else {
          toast.error("등록에 실패했습니다.");
        }
      });
      console.log("error", error);
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
    <Area backgroundColor="#ffffff">
      <Content>
        <Spacer height={"30px"} />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{ padding: "20px" }}
        >
          <Text font={Font.Mapo} size={"1.5rem"}>
            소감 게시판 📝
          </Text>
          <Spacer height={"10px"} />
          <Text font={Font.Mapo} size={"0.8rem"}>
            * 부적절한 발언이 포함된 글은 통보 없이 삭제될 수 있습니다.
          </Text>
        </Flex>
        <form onSubmit={handleSubmit}>
          <Flex justifyContent="center" width={"100%"} flexDirection="column">
            <Button
              type={"button"}
              variant={ButtonVariant.postItem}
              width={"100%"}
            >
              <Flex justifyContent="center">
                <InputStyle
                  ref={nameRef}
                  name={"nickname"}
                  placeholder="닉네임"
                  required
                />
                <InputStyle
                  ref={emailRef}
                  name={"email"}
                  placeholder="이메일"
                />
                <InputStyle
                  ref={passwordRef}
                  type="password"
                  placeholder="비밀번호"
                  name={"password"}
                />
                <Button
                  type={"submit"}
                  width={"100px"}
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
              </Flex>

              <Spacer height={"10px"} />
              <TextareaStyle
                ref={contentRef}
                placeholder="소감을 남겨주세요."
                name={"feedback"}
              />
            </Button>
          </Flex>
        </form>

        <Spacer height={"20px"} />
        <Flex
          height={"500px"}
          flexDirection="row"
          justifyContent="center"
          width={"100%"}
        >
          <Grid gridTemplateColumns="1fr" style={{ width: "100%" }}>
            {Array.isArray(info) &&
              info.map((post, index) => (
                <>
                  <Flex key={index} flexDirection="column" width={"100%"}>
                    <Button variant={ButtonVariant.postItem} width={"100%"}>
                      <Flex>
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
                      </Flex>
                      <Spacer height={"10px"} />
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
