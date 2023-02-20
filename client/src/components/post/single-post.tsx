import React from "react";
import {
  Stack,
  Box,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import routes from "navigation/routes";
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
  createdAt,
  src,
  updatedPost,
}) => {
  const postDate = new Date(createdAt);
  const navigate = useNavigate();
  return (
    <Stack>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <UserInfo authorId={authorId} created={postDate.toLocaleString("lt-LT")} />
        <PostOptions updateList={updatedPost} id={id} title={title} text={text} />
      </Box>
      <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
        Patinka
        {likes}
      </Button>
      <Button onClick={() => navigate(routes.SinglePost.createLink(id))}>{title}</Button>
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
