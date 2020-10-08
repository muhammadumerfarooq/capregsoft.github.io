import React from "react";
import "./App.css";
import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { Footer } from './pages/Footer';
import { About } from './pages/About';

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
        <Footer />
      </div>



    </div>
  );
}

export default App;
