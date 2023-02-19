import React from "react";
import {
  Stack,
  Box,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UserInfo from "./userInfo";
import PostOptions from "./options-button";

type PostBoxProps = PostModel & { updatedPost: any };

const SinglePost: React.FC<PostBoxProps> = ({
  id,
  title,
  text,
  authorId,
  likes,
  isDeleted,
  createdAt,
  src,
  updatedPost,
}) => {
  const postDate = new Date(createdAt);
  return (
    <Stack>
      {isDeleted}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <UserInfo authorId={authorId} created={postDate.toLocaleString("lt-LT")} />
        <PostOptions updateList={updatedPost} id={id} title={title} text={text} />
      </Box>
      <Box>{likes}</Box>
      <Box>{title}</Box>
      <Box>{text}</Box>
      <Box>
        <Swiper
          slidesPerView={1}
        >
          {src.map((img) => (
            <SwiperSlide key={img}><Box component="img" sx={{ width: "100%" }} src={`http://localhost:5007${img}`} /></SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default SinglePost;
