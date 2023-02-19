import React from "react";
import {
  Stack,
  Box,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UserInfo from "./userInfo";

type PostBoxProps = PostModel;

const SinglePost: React.FC<PostBoxProps> = ({
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
        <Box>{likes}</Box>
      </Box>
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
