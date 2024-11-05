import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";

const ProtectedLayout = () => {
  return (
    <Stack
      flexDirection={"column"}
      maxWidth={"800px"}
      overflow={"hidden"}
      minWidth={"100%"}
      mx={"auto"}
    >
      <Header />
      <Outlet />
    </Stack>
  );
};

export default ProtectedLayout;
