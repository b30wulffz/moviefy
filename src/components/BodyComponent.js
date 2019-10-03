import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import RenderMovie from './RenderMovieComponent';
import AddMovie from './AddMovieComponent';
import { Container } from 'reactstrap'

function Body() {

    return (
        <Container className="body-main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/movie/:movieId" component={RenderMovie} />
                <Route exact path="/add_movie" component={AddMovie} />
                <Redirect to="/" />
            </Switch>
        </Container>
    )
}

export default Body;