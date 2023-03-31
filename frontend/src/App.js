import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBarComp from './components/nav.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/admin.js'
import Fir from './pages/fir.js'
import Login from './pages/login.js'
import Suspect from './pages/suspect.js'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route index element={<Fir />} />
          <Route path="blogs" element={<Admin />} />
          <Route path="contact" element={<Suspect />} />
        </Routes>
      </BrowserRouter>
      <NavBarComp />
    </div>
  );
}