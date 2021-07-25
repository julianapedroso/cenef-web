import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;