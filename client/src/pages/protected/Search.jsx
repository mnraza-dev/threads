import React from "react";
import SearchInput from "../../components/search/SearchInput";
import ProfileBar from "../../components/search/ProfileBar";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <>
      {/* Input */}
      <SearchInput />
      <Stack
        flexDirection={"column"}
        gap={1}
        mb={5}
        width={"100%"}
        p={2}
        mx={"auto"}
        maxWidth={"750px"}
      >
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
     
    </>
  );
};

export default Search;
