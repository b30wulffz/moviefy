import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';


function Body(){
    return (
        <div id="body-main">
            <Switch>
                <Route exact to="/home" component={Home} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Body;