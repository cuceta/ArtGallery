import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import NavBar from "./components/NavBar";
import Bio from "./pages/bioPage";
import Gallery from "./pages/galleryPage";
import Timeline from "./pages/timelinePage";
import Copyright from "./pages/copyrightPage";


function App() {

  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/copyright" element={<Copyright />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
