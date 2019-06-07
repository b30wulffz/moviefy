import React, {Component} from 'react';
import MovieData from '../shared/movies';
import CircularProgress from '@material-ui/core/CircularProgress';

class AddMovie extends Component{
    constructor(){
        super();
        this.state={
            isLoading: true,

            data: {
                movie_id: MovieData.movies.length+1,
                title: "",
                release_date: "",
                director_id: null,
                actors: [],
                avg_rating: "",
                description: ""
            },

            actorCheck: {
                check_1: false,
                check_2: false,
                check_3: false,
                check_4: false,
                check_5: false,
            }

        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        setTimeout(
            () => {
                this.setState({
                    isLoading: false
                })
            },
            1000
        )
    }


    handleInputChange(event){
        const target=event.target;
        const name= target.name;

        if(target.type === "checkbox"){
            const checked= target.checked;
            /*if(checked){
                const actorId=target.value;
                //const actorArray= this.state.data.actors.push(parseInt(actorId,10));
                this.setState((prevState)=>{
                    return ({
                            data:{
                                ...prevState.data,
                                actors: prevState.actors.concat([actorId])
                            }
                        })
                })
            }
            else{
                const actorId=target.value;
                const index= this.state.data.actors.indexOf(parseInt(actorId,10));
                if(index>-1)
                {
                    const actorArray= this.state.actors.splice(index,1);
                    this.setState((prevState)=>{
                        return ({
                                data:{
                                    ...prevState.data,
                                    actors: actorArray
                                }
                            })
                    })
                }
            }*/
            this.setState((prevState)=>{
                return ({
                        actorCheck:{
                            ...prevState.actorCheck,
                            [name]: checked
                        }
                    })
            })

        }
        else{
            if(name === "director_id")
            {
                this.setState((prevState)=>{
                    return ({
                            data:{
                                ...prevState.data,
                                [name]: parseInt(target.value,10)   
                            }
                        })
                })
            }
            else
            {
                this.setState((prevState)=>{
                    return ({
                            data:{
                                ...prevState.data,
                                [name]: target.value 
                            }
                        })
                })
            }
        }

        
        console.log(JSON.stringify(this.state))
    }

    handleSubmit(event){
        alert(JSON.stringify(this.state.data));
        event.preventDefault(); 
    }

    render(){

        let data;

        if(this.state.isLoading)
        {
            data=<CircularProgress color="secondary" />
        }
        else
        {
            data=
                <div id="form">
                    <h1>Add a new movie </h1>
                    <form id="form-body" onSubmit={this.handleSubmit}>
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
                                        value={this.state.data.title}
                                        required
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
                                        placeholder="YYYY/MM/DD"
                                        name="release_date"
                                        id="release_date"
                                        value={this.state.data.release_date}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Director: 
                                </th>
                                <td>
                                    <select id="director_id" name="director_id" onChange={this.handleInputChange} value={this.state.data.director_id}>
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
                                            <input type="checkbox" id="actor_1" name="check_1" value="1" 
                                                checked={this.state.actorCheck.check_1} 
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="actor_1">Daniel Radcliffe</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="actor_2" name="check_2" value="2" 
                                                checked={this.state.actorCheck.check_2} 
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="actor_2">Jodie Foster</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="actor_3" name="check_3" value="3"
                                                checked={this.state.actorCheck.check_3} 
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="actor_3">Anthony Hopkins</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="actor_4" name="check_4" value="4"
                                                checked={this.state.actorCheck.check_4} 
                                                onChange={this.handleInputChange} />
                                            <label htmlFor="actor_4">Emma Watson</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="actor_5" name="check_5" value="5"
                                                checked={this.state.actorCheck.check_5} 
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
                                        value={this.state.data.avg_rating}
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
                                        value={this.state.data.description}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </td>
                            </tr>
                        </table>
                        <button type="submit"> Submit Movie </button>
                    </form>
                </div>
        }

        return (
            <div id="addMovie">
                {data}
            </div>
        )
    }
}

export default AddMovie;