import {
  Avatar,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const ProfileLayout = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        width={_700 ? "800px" : "90%"}
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
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontSize={_300 ? "2rem" : "1rem"}
            >
              MNRaza_2024
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={_300 ? "1rem" : "0.8rem"}>
                MNRaza_2024
              </Typography>

              <Chip
                variant="outlined"
                size="small"
                label="threads.cc"
                sx={{
                  fontSize: _300 ? "0.8rem" : "0.6rem",
                }}
              />
            </Stack>
          </Stack>

          <Avatar
            src=""
            alt=""
            sx={{
              width: _300 ? 60 : 40,
              height: _300 ? 60 : 40,
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
          <FaInstagram size={_300 ? 40 : 24} />
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
        width={_700 ? "800px" : "90%"}
        fontSize={_500 ? "1.2rem" : _300 ? "1.1rem" : "0.9rem"}
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
      <Outlet />
    </>
  );
};

export default ProfileLayout;
