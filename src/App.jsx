import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Features from "./Components/Features/Features";
import MissionVision from "./Components/MissionVision/MissionVision";
import AviationForm from "./Components/AviationForm/AviationForm";
import FloatingButtons from "./Components/FloatingButtons/FloatingButtons";
import Blogpage from "./Components/Blog/Blogpage";
import Blog from "./Components/Blog/Blog";
import Dashboard from "./Components/AdminDashboard/Dashboard/Dashboard";
import AdminLoginPage from "./Components/AdminDashboard/AdminLoginPage";
import PrivateRoute from "./Components/AdminDashboard/PrivateRoute";


function Layout() {
  const location = useLocation();
  
  // Prevent navbar from appearing on /dashboard or /AdminLoginPage
  const showNavbar = !(
    location.pathname.startsWith("/dashboard") || location.pathname === "/AdminLoginPage"
  );

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
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
            <section id="blog">
              <Blog />
            </section>
            <section id="aviationform">
              <AviationForm />
            </section>
            <FloatingButtons />
          </>
        } />
        {/* <Route path="/blog" element={<Blogpage />} /> */}
        
        {/* Use PrivateRoute to protect the dashboard route */}
        <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} />} />
        
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
