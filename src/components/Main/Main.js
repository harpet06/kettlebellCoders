import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Workout from "../../pages/Workout/Workout";
import Contact from "../../pages/Contact/Contact";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workout" component={Workout} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
