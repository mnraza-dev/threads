import { CircularProgress, Stack } from "@mui/material";
import React from "react";
const Loading = () => {
  return (
    <Stack
      minHeight={"50vh"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress color="success" />
    </Stack>
  );
};
export default Loading;