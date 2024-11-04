import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
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
      <h1>Threads</h1>
      <Stack
 
        justifyContent={"center"}
        bgcolor={"aliceblue"}
        zIndex={2}
        height={96}
        width={"580px"}
      >
        <Navbar />
      </Stack>

      <IoMenu  className="image-icon" size={36} />    </Stack>
  );
};

export default Header;
