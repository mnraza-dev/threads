import { Avatar, AvatarGroup, Badge, Stack, Stepper } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <Stack
      flexDirection={"column"}
      gap={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <Avatar
            src=""
            alt="MN"
            sx={{
              width: 20,
              height: 20,
              bgcolor: "green",
              position: "relative",
              right: 4,
              bottom: 4,
            }}
          >
            +
          </Avatar>
        }
      >
        <Avatar
          src=""
          alt="AJ"
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Badge>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
        height={"100%"}
      >
        <Stepper
          orientation={"vertical"}
          activeStep={0}
          sx={{
            border: "0.1rem solid gray",
            width: "0px",
            height: "100%",
          }}
        ></Stepper>
        <AvatarGroup
          // max={3}
          total={4}
          sx={{
            "& .MuiAvatar-root": {
              width: 24,
              height: 24,
              fontSize: 12,
            },
          }}
        >
          <Avatar src="" alt="" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default PostOne;
