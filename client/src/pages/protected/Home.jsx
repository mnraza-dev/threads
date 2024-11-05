import { Button, Stack } from "@mui/material";
import React from "react";
import Input from "../../components/home/Input";
import Post from "./../../components/home/Post";

const Home = () => {
  return (
    <>
      <Input />
      <Stack gap={2} mb={10} flexDirection={"column"}>
        <Post />
        <Post />
        <Post />
      </Stack>
      <Button
        size="large"
        sx={{
          color: "black",
backgroundColor:'#FFFFF',
          my: 5,
          p: 3,
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Load More
      </Button>
    </>
  );
};

export default Home;
