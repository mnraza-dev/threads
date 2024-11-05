import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const ProfileLayout = () => {
  return (
    <>
      <Stack
        width={"800px"}
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        mx={"auto"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={2}>
            <Typography variant="h2" fontWeight={"bold"} fontSize={"2rem"}>
              MNRaza_2024
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={"1rem"}>
                MNRaza_2024
              </Typography>

              <Chip
                variant="outlined"
                size="small"
                label="threads.cc"
                sx={{
                  fontSize: "0.8rem",
                }}
              />
            </Stack>
          </Stack>

          <Avatar
            src=""
            alt=""
            sx={{
              width: 60,
              height: 60,
            }}
          />
        </Stack>

        <Typography variant="subtitle2">This is bio</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle2" color="gray">
            21 Followers
          </Typography>
          <FaInstagram />
        </Stack>
        <Button
          size="large"
          color="black"
          sx={{
            borderRadius: "10px",

            color: "black",
            textAlign: "center",
            border: "1px solid gray",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          Edit Profile
        </Button>
      </Stack>

      <Stack
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        pb={2}
        my={5}
        borderBottom={"2px solid gray"}
        width={"800px"}
        fontSize={"1.2rem"}
        mx={"auto"}
      >
        <Link className="link" to={"/profile/threads/1"}>
          Threads
        </Link>
        <Link className="link" to={"/profile/replies/1"}>
          Replies
        </Link>
        <Link className="link" to={"/profile/repost/1"}>
          Repost
        </Link>
      </Stack>
      <Outlet/>
    </>
  );
};

export default ProfileLayout;
