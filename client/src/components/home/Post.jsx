import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";

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
      <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
        <Avatar
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="AJ"
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={1}
        fontSize={"1rem"}
        alignItems={"center"}
      >
        <Typography variant="caption" color="GrayText">
          Posted a new post
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Post;
