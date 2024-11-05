import { Stack } from "@mui/material";
import React from "react";
import Input from "../../components/home/Input";
import Post from "./../../components/home/Post";

const Home = () => {
  return (
    <>
      <Input />
      <Stack gap={2} mb={10} flexDirection={"column"}>
        <Post />
      </Stack>
    </>
  );
};

export default Home;
