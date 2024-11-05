import React from "react";
import { Stack, TextField } from "@mui/material";
import Post from "./../../components/home/Post";
import Comments from './../../components/home/post/Comments';

const SinglePost = () => {
  return (
    <>
      <Stack flexDirection={"column"} gap={2} my={5}>
        <Post />
        <Stack
          flexDirection={"column"}
          width={"800px"}
          gap={2}
          my={5}
          mx={"auto"}
        >
          <Comments />
        </Stack>
        <TextField

          variant="outlined"
          autoFocus
          placeholder="Comment here"
          id="comment"
          sx={{
            width: "50%",
            padding: 1,
            borderRadius:'16px',
            my: 5,
            mx: "auto",
          }}
        />
      </Stack>
    </>
  );
};

export default SinglePost;
