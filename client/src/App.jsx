import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Header from "./components/common/Header";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Register />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
