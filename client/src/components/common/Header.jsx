import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      height={52}
      justifyContent={"space-around"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      zIndex={100}
      py={1}
    >
      <h1>Threads App</h1>
      <Stack
 
        justifyContent={"center"}
        bgcolor={"aliceblue"}
        zIndex={2}
        height={96}
        width={"580px"}
      >
        <Navbar />
      </Stack>

      <p>Menu</p>
    </Stack>
  );
};

export default Header;
