import React from 'react'
import Loading from './components/common/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Header from './components/common/Header';

const App = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Loading />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/user" element={<Loading />} />
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
