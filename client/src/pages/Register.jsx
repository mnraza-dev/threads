import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log({ email, password });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    const data = {
      email,
      password,
    };
  };
  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "aliceblue",
      }}
    >
      <Stack
        flexDirection={"column"}
        width={_700 ? "40%" : "90%"}
        gap={2}
        mt={_700 ? 20 : 0}
      >
        <Typography
          variant="h5"
          fontSize={_700 ? "1.5rem" : "1rem"}
          fontWeight={"bold"}
          alignSelf={"center"}
        >
          {login ? "Login with Email" : "Register with Email"}
        </Typography>
        {login ? null : (
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="Enter your username"
          />
        )}

        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={login ? handleLogin : handleRegister}
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
            },
          }}
        >
          {login ? "Login" : "Sign Up"}
        </Button>
        <Typography
          variant="subtitle2"
          fontSize={_700 ? "1.3rem" : "1rem"}
          fontWeight={"bold"}
          alignSelf={"center"}
        >
          {login ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleLogin} className="login-link">
            {login ? "Register" : "Login"}
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;
