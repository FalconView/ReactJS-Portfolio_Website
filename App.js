import React from "react";
import "./App.css";
import Sidebar from "./src/components/sidebar/Sidebar";
import Home from "./src/components/home/Home";
import About from "./src/components/about/About";
import Services from "./src/components/services/Services";
import Resume from "./src/components/resume/Resume";
import Portfolio from "./src/components/portfolio/Portfolio";
import Pricing from "./src/components/pricing/Pricing";
import Testimonials from "./src/components/testimonials/Testimonials";
import Blog from "./src/components/blog/Blog";
import Contact from "./src/components/contact/Contact";

const App = () => {
  return;
  <>
    <Sidebar />
    <main className="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  </>;
};

export default App;
