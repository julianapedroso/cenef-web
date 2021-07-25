import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Donations from '../pages/Donations';
import Home from '../pages/Home';
import WeAreYou from '../pages/WeAreYou';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quem-somos" component={WeAreYou} />
        <Route exact path="/doe" component={Donations} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;