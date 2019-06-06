import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import RenderMovie from './RenderMovieComponent';

function Body(){

    return (
        <div id="body-main">
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/home/:movieId" component={RenderMovie} />
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Body;