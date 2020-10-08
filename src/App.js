import React from "react";
import "./App.css";
import { Header } from './pages/Shared/Header';
import { Hero } from './pages/Home/Hero';
import { Footer } from './pages/Shared/Footer';
import { About } from './pages/Home/About';
import { Service } from './pages/Home/Service';
import { Client } from './pages/Shared/Client';
import { Testomonials } from "./pages/Shared/Testomonials";
import { SocialMedia } from "./pages/Shared/SocialMedia";
// import { Banner } from "./pages/About/Banner";


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Service />
      </div>

      <div>
        <Client />
      </div>
      <div>
        <Testomonials />
      </div>
      <div>
        <SocialMedia />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div><Banner /></div> */}


    </div>
  );
}



export default App;

