import React from "react";
import ApiService from "services/api-service";
import { Box } from "@mui/material";
import CreatePost from "components/post/create-post";
import SinglePost from "./single-post";

const PostBox = () => {
  const [posts, setPosts] = React.useState<PostModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getAllPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  const updatedPost = (newPosts: PostModel[]) => {
    setPosts(newPosts);
  };

  return (
    <Box>
      <CreatePost updatedPost={updatedPost} />
      {posts
        .map((post) => <SinglePost updatedPost={updatedPost} key={post.id} {...post} />).reverse()}
    </Box>
  );
};

export default PostBox;
