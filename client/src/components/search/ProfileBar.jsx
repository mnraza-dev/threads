import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProfileBar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
    
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        borderRadius={"15px"}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"} gap={0.6}>
            <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
              MnRaza_2024
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color={"gray"}>
              Bio : Passionate Developer
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color={"gray"}>
              3 Followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="small"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "10px",
            p: 2,
            height: 40,
          }}
        >Follow</Button>
      </Stack>
    </>
  );
};

export default ProfileBar;
