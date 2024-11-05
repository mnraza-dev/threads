import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { IoIosMore } from 'react-icons/io';

const Comments = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={2}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={"90%"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
          <Avatar
            src=""
            alt=""
            sx={{
              width: 28,
              height: 28,
            }}
          />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontSize={"0.9rem"} fontWeight={"bold"}>
              MNRaza__2024
            </Typography>
            <Typography variant="subtitle2" fontSize={"0.9rem"}>
              This is comment
            </Typography>
          </Stack>
        </Stack>
        <Stack
          color={"GrayText"}
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          fontSize={"0.9rem"}
        >
          <p>24 mins</p>
          <IoIosMore size={28}/>
        </Stack>
      </Stack>
    </>
  );
};

export default Comments;
