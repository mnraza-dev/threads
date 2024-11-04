import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      gap={2}
      height={"65vh"}
      boxShadow={"7px 7px 7px 7px white"}
      alignItems={"center"}
      borderRadius={"10px"}
      bgcolor={"white"}
     
      p={5}
    >
        <Typography variant="h1">
          Error
        </Typography>
        <Typography variant="h2">
          Page Not Found
        </Typography>

        <Button
          variant="contained"
         
          size="large"
          href="/" 
          sx={{
            marginTop: "20px",
            bgcolor: "black",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Back to Home
        </Button>
    </Stack>
  );
};

export default Error;
