import React from "react";
import {
  Breakpoint, Container, useMediaQuery, type Theme,
} from "@mui/material";
import PostBox from "components/post";

const HomePage = () => {
  const xsBreakpoint: Breakpoint = "sm";
  const isExtraSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down(xsBreakpoint));
  return (
    <Container fixed maxWidth={isExtraSmall ? "xs" : "lg"}>
      <PostBox />
    </Container>
  );
};

export default HomePage;
