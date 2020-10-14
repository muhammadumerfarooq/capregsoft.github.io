import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Header } from './pages/Shared/Header';
import { Hero } from './pages/Home/Hero';
import { Footer } from './pages/Shared/Footer';
import { About } from './pages/Home/About';
import { Service } from './pages/Home/Service';
import { Client } from './pages/Shared/Client';
import { Testomonials } from "./pages/Shared/Testomonials";
import { SocialMedia } from "./pages/Shared/SocialMedia";
import { AboutUs } from "./pages/About/AboutUs";
import { Services } from "./pages/Services/Services";


function App() {
  return (

    <div>
      <Router>
        <Fragment>
          <div>
            <Header />
          </div>
          <div>
            <Route exact path='/' component={Hero} />
          </div>
          <div>
            <Route exact path='/' component={About} />
          </div>
          <div>
            <Route exact path='/' component={Service} />
          </div>

          <div>
            <Route exact path='/' component={Client} />
          </div>
          <div>
            <Route exact path='/' component={Testomonials} />
          </div>
          <div>
            <Route exact path='/' component={SocialMedia} />
          </div>

          <Switch>
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/services' component={Services} />
          </Switch>

          <div>
            <Footer />
          </div>
          {/* <div><Banner /></div> */}
        </Fragment>
      </Router>

    </div>

  );
}



export default App;

