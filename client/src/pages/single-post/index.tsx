import React from "react";
import { Navigate, useParams } from "react-router-dom";
import routes from "navigation/routes";
import {
  Box, Breakpoint, Button, Container, Stack, Theme, useMediaQuery,
} from "@mui/material";
import ApiService from "services/api-service";
import UserInfo from "components/post/userInfo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<PostModel>();
  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedPost = await ApiService.getSinglePost(Number(id));
        setPost(fetchedPost);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  const postDate = new Date(post?.createdAt);
  const xsBreakpoint: Breakpoint = "sm";
  const isExtraSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down(xsBreakpoint));
  return (
    <Container fixed maxWidth={isExtraSmall ? "xs" : "lg"}>
      <Box>
        <Stack>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <UserInfo authorId={post?.authorId} created={postDate.toLocaleString("lt-LT")} />
          </Box>
          <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
            Patinka
            {post?.likes}
          </Button>
          <Box>{post?.title}</Box>
          <Box>{post?.text}</Box>
          <Box>
            <Swiper
              slidesPerView={1}
            >
              {post?.src.map((img) => (
                <SwiperSlide key={img}><Box component="img" sx={{ width: "100%" }} src={`http://localhost:5007${img}`} /></SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SinglePost;
