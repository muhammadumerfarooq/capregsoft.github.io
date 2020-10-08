import React from "react";
import "./App.css";
import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { Footer } from './pages/Footer';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { Client } from './pages/Client';


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
        <Footer />
      </div>



    </div>
  );
}

export default App;
