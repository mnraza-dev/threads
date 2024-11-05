import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

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
              Hi Guys ! Comment on this project and give your feedback.
            </Typography>
          </Stack>
          <img
          
            src="https://picsum.photos/seed/picsum/200/150"
            loading="lazy"
            width={"400px"}
            height={"auto"}
            alt=""
            className="img-round"
          />
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack gap={2} m={1} flexDirection={"row"}>
            <FaRegHeart size={28} />
            <FaRegComment size={28} />
            <FaRetweet size={28} />
            <IoMdSend size={28} />
          </Stack>

          <Stack
            flexDirection={"row"}
            position={"relative"}
            gap={1}
            top={-3}
            left={-4}
          >

            <Typography
              variant="caption"
              fontSize={"1.1rem"}
              color={"GrayText"}
            >
              2 Likes
            </Typography>
            <Typography
              variant="caption"
              fontSize={"1.1rem"}
              color={"GrayText"}
            >
              1 Comment
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
