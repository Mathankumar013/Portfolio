import React from 'react';
import './App.css';
import Home from './component/home/home';
import Skill from './component/skill/skill';
import Navigation from './component/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/navbar/navbar.css';
import Education from './component/education/education';
import Visionary from './component/visionary/visionary';
import Project from './component/project/project';
import Contact from './component/contact/contact';
import Bottom from './component/bottom/bottom';
function App() {
  return (
    <>
    <div>
    <Navigation/>
    <div>
      <Home/>
      <Skill/>
      <Project/>
      <Visionary/>
      <Education/>
      <Contact/>
    <Bottom/>
    </div>
    </div>
    </>
  );
}

export default App;
