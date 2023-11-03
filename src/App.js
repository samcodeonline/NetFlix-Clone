import "./App.scss";
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  )
}

export default App