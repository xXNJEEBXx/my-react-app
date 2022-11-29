import React, { Component } from 'react';
import Menubar from './pages/Menubar';
import Index from './pages/Index';
import Login from './pages/Login';
import Sigin_in from './pages/Sigin_in';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthCheck from './pages/components/AuthCheck.js';


export default class App extends Component {

  render() {
    var test = new AuthCheck()
    test.douserlogin()
    return (
      <div>
        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sigin_in" element={<Sigin_in />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
