import React from "react";
import "./App.css";
import { Header } from './pages/Header';
import { Hero } from './pages/Hero';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;
