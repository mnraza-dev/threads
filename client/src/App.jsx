import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Header from "./components/common/Header";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import ProtectedLayout from './pages/protected/ProtectedLayout';

const App = () => {
  return (
    <Box minHeight={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout/>}>
            <Route exact path="" element={<h1>Home</h1>} />
            <Route exact path="post/:id" element={<h1>Single Post</h1>} />
            <Route exact path="search" element={<h1>Search</h1>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
