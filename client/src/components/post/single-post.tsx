import React from "react";

import {
  Stack,
  Box,
} from "@mui/material";
import UserInfo from "./userInfo";

type PostBoxProps = PostModel;

const SinglePost: React.FC<PostBoxProps> = ({
  id,
  title,
  text,
  authorId,
  likes,
  isDeleted,
  createdAt,
  src,
}) => {
  const postDate = new Date(createdAt);
  return (
    <Stack>
      {isDeleted}
      <Box>
        <UserInfo authorId={authorId} created={postDate.toLocaleString("lt-LT")} />
      </Box>
      <Box>{title}</Box>
      <Box>{text}</Box>
      <Box>{likes}</Box>
      <Box key={id} component="img" src={`http://localhost:5007${src[0]}`} />
    </Stack>
  );
};

export default SinglePost;
