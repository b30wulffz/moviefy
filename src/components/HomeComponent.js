import React, {Component} from 'react';
import MovieData from '../shared/movies';
import StarRatings from 'react-star-ratings';
import {NavLink} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

class Home extends Component{
    constructor(){
        super();
        this.state={
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(
            () => {
                this.setState({
                    isLoading: false
                })
            },
            1500
        )
    }

    render(){

        function renderMovieDisp(movie){
            return (
                <NavLink to={`/home/${movie.movie_id}`} className="card" key={movie.movie_id}>
                    <div className="card-title">
                        {movie.title}
                    </div>
                    <div className="card-image">
                        <img src={movie.poster} />
                    </div>
                    <div className="card-rating">
                        <StarRatings
                            rating={parseFloat(movie.avg_rating)}
                            starRatedColor="rgb(229, 46, 120)"
                            numberOfStars={5}
                            name='rating'
                            starDimension="25px"
                            starSpacing="8px"
                        />
                    </div>
                </NavLink>
            )
        }

        const movieblock= MovieData.movies.map((movie)=>{
            return renderMovieDisp(movie);
        });        

        let data;

        if(this.state.isLoading)
        {
            data=<CircularProgress color="secondary" />
        }
        else
        {
            data= 
            <span>
                <div id="home-head">
                    <h1>A magical land of movies awaits you</h1>
                    <p>Here are some of our best picks for you!</p>
                </div>
                <div id="home-display">
                    {movieblock}
                </div>
            </span>
        }
        
        return (
            <div id="home">
                {data}
            </div>
        )
    }
}

export default Home;