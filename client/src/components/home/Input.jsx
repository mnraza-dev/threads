import React from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";

const Input = () => {
  return (
    <Stack
      flexDirection={"row"}
      gap={2}
      alignItems={"center"}
      width={"70%"}
      height={28}
      justifyContent={"space-between"}
      p={3}
      borderBottom={"2px solid gray"}
      my={5}
      mx={"auto"}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Avatar src="" alt="AJ" />
        <Typography fontWeight={"bold"} color="GrayText">
          Start a Thread ...
        </Typography>
      </Stack>
      <Button
        size="medium"
        color="aliceblue"
        bgcolor="gray"
        sx={{
          color: "aliceblue",
          bgcolor: "gray",
          borderRadius:'8px',
          ":hover": {
            bgcolor: "black",
            cursor: "pointer",
          },
        }}
      >
        POST
      </Button>
    </Stack>
  );
};

export default Input;
