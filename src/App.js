import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './menus/Home';
import About from './menus/About';
import Service from './menus/Service';
import Contact from './menus/Contact';
import Navbar from './Navbar'; 
import Footer from './Footer';
import { Switch, Route, Redirect} from 'react-router-dom';

const  App = () => {
  return (
    <div>
      < Navbar/>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/contact" component = {Contact} />
        <Route exact path="/service" component = {Service} />
        <Redirect to ="/" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
