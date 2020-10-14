import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Header } from './pages/Shared/Header';
import { Footer } from './pages/Shared/Footer';
import { Index } from "./pages/Home/Index";
import { AboutUs } from "./pages/About/AboutUs";
import { Services } from "./pages/Services/Services";
import { Contact } from "./pages/Contact/Contact";
import { Career } from "./pages/Career/Career";


function App() {
  return (

    <div>
      <Router>
        <Fragment>
          <div>
            <Header />
          </div>
          <div>
            <Route exact path='/' component={Index} />
          </div>


          <Switch>
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/career' component={Career} />
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

