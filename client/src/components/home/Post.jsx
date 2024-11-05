import React from "react";
import { Stack, Typography } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import PostOne from "./post/PostOne";
import PostTwo from "./post/PostTwo";
const Post = () => {
  return (
    <Stack
    
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"3px solid gray"}
      mx={"auto"}
      p={2}
      sx={{
        ":hover": {
          cursor: "pointer",
          boxShadow: "6px 6px  6px gray",
        },
        transition: "all ease-in-out 0.3s",
      }}
    >
      <Stack flexDirection={"row"} gap={2}>
        <PostOne />
        <PostTwo />
        <Stack
        flexDirection={"row"}
        justifyContent={"end"}
        gap={1}
        fontSize={"1rem"}
       
      >
        <Typography
          position={"relative"}
          top={2}
          fontSize={"1rem"}
          variant="caption"
          color="GrayText"
        >
          24h
        </Typography>
        <IoIosMore size={32} />
      </Stack>
      </Stack>
   
    </Stack>
  );
};

export default Post;
