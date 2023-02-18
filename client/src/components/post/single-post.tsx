import React from "react";

import {
  Stack,
  Box,
  Typography,
  Button,
} from "@mui/material";

type PostBoxProps = PostModel;

const SinglePost: React.FC<PostBoxProps> = ({
  id, title, text, authorId, likes, isDeleted, createdAt, src,
}) => (
  <Stack>
    <Box>
      Autorius:
      {authorId}
    </Box>
    <Box>
      Sukurta:
      {createdAt}
    </Box>
    <Box>{title}</Box>
    <Box>{text}</Box>
    <Box>{likes}</Box>
    <Box key={id} component="img" src={`http://localhost:5007${src[0]}`} />
  </Stack>
);

export default SinglePost;
