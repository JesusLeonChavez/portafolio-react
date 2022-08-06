import React from 'react'
import './App.css';

import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Resume from './components/resume/Resume';
// import Services from "./components/services/Services.Jsx";
import SideBar from './components/sidebar/SideBar';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <SideBar />
      <main className="main">
        <Home />
        <About />
        {/* <Services /> */}
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App
