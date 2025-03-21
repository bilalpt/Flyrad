import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'; // Add About section
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import MissionVision from './Components/MissionVision/MissionVision';
import AviationForm from './Components/AviationForm/AviationForm';
import FloatingButtons from './Components/FloatingButtons/FloatingButtons';

function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const missionVisionRef = useRef(null);
  const servicesRef = useRef(null);
  const aviationFormRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (section) => {
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" }); // Now scrolling to About
    if (section === "features") featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "missionvision") missionVisionRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "services") servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "aviationform") aviationFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      
      <section id="home" ref={homeRef}>
        <Home />
      </section>

      <section id="features" ref={featuresRef}>
        <Features />
      </section>

      <section id="about" ref={aboutRef}> 
        <About />  {/* Add About section here */}
      </section>

      <section id="missionvision" ref={missionVisionRef}>
        <MissionVision />
      </section>

      <section id="services" ref={servicesRef}>
        <Services />
      </section>

      <section id="aviationform" ref={aviationFormRef}>
        <AviationForm />
      </section>

      <FloatingButtons />
    </>
  );
}

export default App;
