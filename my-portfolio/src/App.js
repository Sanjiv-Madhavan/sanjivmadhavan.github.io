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
import Backend from './components/aboutme/skills/BackendSkills';
import Skills from './components/aboutme/skills/skills';
import Frontend from './components/aboutme/skills/FrontendSkills';
import DevOps from './components/aboutme/skills/DevOpsSkills';
import Experience from './components/aboutme/journey/IndustryExperience';
import Education from './components/aboutme/journey/Education';

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='/' element={<About />}></Route>
            <Route path='skills' element={<Skills />}>
              <Route path='backend' element={<Backend />}></Route>
              <Route path='frontend' element={<Frontend />}></Route>
              <Route path='devops' element={<DevOps />}></Route>
            </Route>
            <Route path='experience' element={<Experience />}></Route>
            <Route path='education' element={<Education />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
