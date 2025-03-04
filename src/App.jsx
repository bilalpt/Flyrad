import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import MissionVision from './Components/MissionVision/MissionVision';
import AviationForm from './Components/AviationForm/AviationForm';
import FloatingButtons from './Components/FloatingButtons/FloatingButtons';

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="missionvision">
        <MissionVision />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="aviationform">
        <AviationForm />
      </section>
      <FloatingButtons />
    </>
  );
}

export default App;
