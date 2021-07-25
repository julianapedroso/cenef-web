import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Donations from '../pages/Donations';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doe" component={Donations} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;