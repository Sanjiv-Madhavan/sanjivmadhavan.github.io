import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import Preloader from "./Preloader";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/homepage/HomePage';
import About from './components/aboutme/about/about';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" >
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path='/' element={<About />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
