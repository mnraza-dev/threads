import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "aliceblue",
      }}
    >
      <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
        <Typography
          variant="h5"
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          alignSelf={"center"}
        >
          Login with Email
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Enter your username"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Enter your Email"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Enter your Password"
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "10px",
            bgcolor: "black",
            height: "52px",
            color: "white",
            fontSize: "1rem",
            ":hover": {
                bgcolor: "#414141",
                color: "white",
                cursor: "pointer",
            }
            ,
          }}
        >
          Register
        </Button>
        <Typography
          variant="h5"
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          alignSelf={"center"}
        >
          Login with Email
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;
