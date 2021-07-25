import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import WeAreYou from '../pages/WeAreYou';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/quem-somos" component={WeAreYou} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;