import { Stack, Typography } from "@mui/material";
import React from "react";

const PostTwo = () => {
  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontSize={15} fontWeight={"bold"}>
              MN Raza
            </Typography>
            <Typography variant="h5" fontSize={"1.2rem"}>
              MN Raza
            </Typography>
          </Stack>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            loading="lazy"
            width={"400px"}
            height={"auto"}
            alt=""
          />
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
