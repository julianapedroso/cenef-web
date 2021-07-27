import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Donations from "../pages/Donations";
import Home from "../pages/Home";
import Volunteer from "../pages/Volunteer";
import Error from "../pages/Error";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quemsomos" component={AboutUs} />
        <Route exact path="/doe" component={Donations} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/sejavoluntario" component={Volunteer} />
        <Error />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
