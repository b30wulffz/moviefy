import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import RenderMovie from './RenderMovieComponent';
import AddMovie from './AddMovieComponent';

function Body(){

    return (
        <div id="body-main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/movie/:movieId" component={RenderMovie} />
                <Route exact path="/add_movie" component={AddMovie} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Body;