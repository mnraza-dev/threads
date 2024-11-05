import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";

import { Box } from "@mui/material";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import ProfileLayout from "./pages/protected/profile/ProfileLayout";
import Threads from "./pages/protected/profile/Threads";
import Replies from "./pages/protected/profile/Replies";
import Repost from "./pages/protected/profile/Repost";
import SinglePost from "./pages/protected/SinglePost";

const App = () => {
  return (
    <Box minHeight={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="post/:id" element={<SinglePost/>} />
            <Route exact path="search" element={<Search />} />
            <Route exact path="profile" element={<ProfileLayout />}>
              <Route exact path="threads/:id" element={<Threads />} />
              <Route exact path="replies/:id" element={<Replies />} />
              <Route exact path="repost/:id" element={<Repost />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
