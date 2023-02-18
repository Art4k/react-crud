import React from "react";
import ApiService from "services/api-service";
import { Container } from "@mui/material";
import SinglePost from "./single-post";

const PostBox = () => {
  const [posts, setPosts] = React.useState<PostModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getAllPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  return (
    <Container>
      {posts.map((post) => <SinglePost key={post.id} {...post} />)}
    </Container>
  );
};

export default PostBox;
