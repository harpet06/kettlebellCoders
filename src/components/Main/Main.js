import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Workout from "../../pages/Workout/Workout";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workout" component={Workout} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
