import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Workout from "../../pages/Workout/Workout";

function Main() {
    return (
        <main>
           <Switch>
               <Route exact path="/" component={Home} /> 
                <Route path = "/workout" component={Workout} />
           </Switch>
        </main>
    )
}

export default Main;