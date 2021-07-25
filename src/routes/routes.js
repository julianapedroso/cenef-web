import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../pages/Contact';
import Donations from '../pages/Donations';
import Home from '../pages/Home';
import Volunteer from '../pages/Volunteer';
import WeAreYou from '../pages/WeAreYou';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quem-somos" component={WeAreYou} />
        <Route exact path="/doe" component={Donations} />
        <Route exact path="/doe" component={Contact} />
        <Route exact path="/doe" component={Volunteer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;