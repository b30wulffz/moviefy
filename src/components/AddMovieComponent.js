import React, {Component} from 'react';
import MovieData from '../shared/movies';

class AddMovie extends Component{
    constructor(){
        super();
        this.state={
            movie_id: MovieData.movies.length+1,
            title: "",
			poster: "",
			release_date: "",
			director_id: null,
			actors: [],
			avg_rating: "",
			description: ""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target=event.target;
        const name= target.name;

        if(target.type === "checkbox"){
            const checked= target.checked;
            if(checked){
                const actorId=target.value;
                const actorArray= this.state.actors.push(parseInt(actorId,10));
                this.setState={
                    actors: actorArray
                }
            }
            else{
                const actorId=target.value;
                const index= this.state.actors.indexOf(parseInt(actorId,10));
                if(index>-1)
                {
                    const actorArray= this.state.actors.splice(index,1);
                    this.setState={
                        actors: actorArray
                    }
                }
            }

        }
        else{
            if(name === "director_id")
            {
                this.setState({
                    [name]: parseInt(target.value,10)   
                })
            }
            else
            {
                this.setState({
                    [name]: target.value
                })
            }
        }

        
        console.log(JSON.stringify(this.state))
    }

    render(){
        return (
            <div id="form">
                <h1>Add a new movie: </h1>
                <form id="form-body">
                    <table>
                        <tr>
                            <th>
                                Movie Title:
                            </th>
                            <td>
                                <input 
                                    type="text" 
                                    placeholder="Name of the movie"
                                    name="title"
                                    id="title"
                                    onChange={this.handleInputChange}
                                    value={this.state.title}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Release Date:
                            </th>
                            <td>
                                <input 
                                    type="text"
                                    placeholder="yyyy/mm/dd"
                                    name="release_date"
                                    id="release_date"
                                    value={this.state.release_date}
                                    onChange={this.handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Director: 
                            </th>
                            <td>
                                <select id="director_id" name="director_id" onChange={this.handleInputChange} value={this.state.director_id}>
                                    <option disabled selected>--SELECT A DIRECTOR--</option>
                                    <option value="1">Daniel Radcliffe</option>
                                    <option value="2">Jodie Foster</option>
                                    <option value="3">Anthony Hopkins</option>
                                    <option value="4">Emma Watson</option>
                                    <option value="5">John Doe</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Actors:
                            </th>
                            <td>
                                <ul>
                                    <li>
                                        <input type="checkbox" id="actor_1" value="1" 
                                            checked={this.state.actors.find((id)=> id===1)} 
                                            onChange={this.handleInputChange} />
                                        <label htmlFor="actor_1">Daniel Radcliffe</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="actor_2" value="2" 
                                            checked={this.state.actors.find((id)=> id===2)} 
                                            onChange={this.handleInputChange} />
                                        <label htmlFor="actor_2">Jodie Foster</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="actor_3" value="3"
                                            checked={this.state.actors.find((id)=> id===3)} 
                                            onChange={this.handleInputChange} />
                                        <label htmlFor="actor_3">Anthony Hopkins</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="actor_4" value="4"
                                            checked={this.state.actors.find((id)=> id===4)} 
                                            onChange={this.handleInputChange} />
                                        <label htmlFor="actor_4">Emma Watson</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="actor_5" value="5"
                                            checked={this.state.actors.find((id)=> id===5)} 
                                            onChange={this.handleInputChange} />
                                        <label htmlFor="actor_5">John Doe</label>
                                    </li>
                                </ul>
                                
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Average Rating:
                            </th>
                            <td>
                                <input 
                                    type="number" 
                                    placeholder="Eg: 4.56 Out of 5"
                                    name="avg_rating"
                                    id="avg_rating"
                                    min="0"
                                    max="5"
                                    step="0.01"
                                    value={this.state.avg_rating}
                                    onChange={this.handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Description:
                            </th>
                            <td>
                                <textarea
                                    placeholder="Enter the summary of the movie"
                                    name="description"
                                    id="description"
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                />
                            </td>
                        </tr>
                    </table>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddMovie;