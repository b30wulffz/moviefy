import React, {Component} from 'react';
import MovieData from '../shared/movies';
import UserData from '../shared/user';
import RatingsData from '../shared/ratings';
import CircularProgress from '@material-ui/core/CircularProgress';
import StarRatings from 'react-star-ratings';

class RenderMovie extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            allMovies: MovieData.movies,
            users: UserData.users,
            login_id: 2,
            login_userData: null,
            ratings: null
        }
        this.changeRating= this.changeRating.bind(this);
    }

    componentDidMount(){
        setTimeout(
            () => {
                this.setState({
                    isLoading: false
                })
            },
            500
        )
        
        this.setState((prevState)=>{
            return {
                login_userData: RatingsData.user_ratings.filter((user)=>{
                    return user.user_id === prevState.login_id;
                })[0]
            };
        });
        this.setState((prevState)=>{
            return ({
                ratings: prevState.login_userData.ratings
            });
        });
    }

    

    changeRating( newRating, name) {
        
        const alertRating={
            "movie_id": parseInt(name,10),
            "ratings": newRating
        }
        this.setState({
          ratings: [
              alertRating
          ]
        });
        alert(JSON.stringify(alertRating));
      }

    render(){
        
        function RenderPerson({data}){
            return (
                <div className="person-card" key={data.user_id}>
                    <img src={process.env.PUBLIC_URL +data.profile_pic} className="person-img" alt={data.first_name+"'s Photo"} />
                    <p className="person-name">{data.first_name} {data.last_name}</p>
                    <p className="person-age">Age: {data.age}</p>
                </div>
            );
        }

        const currMovie= this.state.allMovies.filter((movie)=>{
            return movie.movie_id === parseInt(this.props.match.params.movieId, 10);
        })[0];

        
        let data;

        if(this.state.isLoading)
        {
            data=<CircularProgress color="secondary" />
        }
        else
        {
            if(!currMovie){
                data= 
                    <p id="error">
                        <span id="errorNum">Error 404:</span> Not Found!
                    </p>
            }
            else{
                const director= this.state.users.filter((user)=>{
                    return user.user_id === currMovie.director_id
                })[0];        

                const actors=currMovie.actors.map((actorId)=>{
                    let actor;
                    actor= this.state.users.filter((user)=>{
                        return actorId===user.user_id
                    })[0];
                    return (<RenderPerson data={actor} />);
                });
                
                let rate_movie= this.state.ratings.filter(
                    (movie) => {
                        return (movie.movie_id) === currMovie.movie_id;
                    }
                )[0];

                if(!rate_movie){
                    rate_movie={
                        "movie_id": currMovie.movie_id,
                        "ratings": 0
                    }
                }

                data= 
                    <div id="movie-card">
                        <div id="movie-card-title">
                            <h1>{currMovie.title}</h1>
                        </div>
                        <div id="movie-card-body">
                            <div id="movie-card-image">
                                <img src={process.env.PUBLIC_URL +currMovie.poster} alt={currMovie.title} />
                            </div>
                            <div id="movie-card-content">
                                <table>
                                    <tbody>
                                    <tr>
                                        <th>
                                            Release Date:
                                        </th>
                                        <td>
                                            {currMovie.release_date}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Director:
                                        </th>
                                        <td>
                                            <RenderPerson data={director} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Average Rating: 
                                        </th>
                                        <td>
                                            <StarRatings
                                                rating={parseFloat(currMovie.avg_rating)}
                                                starRatedColor="rgb(229, 46, 120)"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="25px"
                                                starSpacing="8px"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Description: 
                                        </th>
                                        <td>
                                            {currMovie.description}
                                        </td> 
                                    </tr>
                                    <tr>
                                        <th>
                                            Actors: 
                                        </th>
                                        <td id="actors">
                                            {actors}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Your Rating:
                                        </th>
                                        <td>
                                            <StarRatings
                                                rating={rate_movie.ratings}
                                                starRatedColor="rgb(255, 146, 36)"
                                                changeRating={this.changeRating}
                                                numberOfStars={5}
                                                name={currMovie.movie_id.toString(10)}
                                                starDimension="25px"
                                                starSpacing="8px"
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }
    
        }

        
        return (
            <span id="renderMovie">
                {data}
            </span>
        )
    }
}

export default RenderMovie;