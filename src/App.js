import React, { Component } from 'react';
import ListMovies from './ListMovies';
import FilterMovie from './FilterMovie'
import * as MovieAPI from './utils/MoviesAPI'

class App extends Component {


  state = {
    movies: [],
    criteria: ''  
  }

  componentDidMount(){
    MovieAPI.getAll()
    .then((moviesFromServer) => {
      this.setState(() => ({ movies: moviesFromServer }))
    })
  }

  removeMovie = (movie) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter((m) => m.id !== movie )
    }))

    MovieAPI.remove(movie)
  }

  
  setCriteria = (text) => {
    this.setState(() => (
      {criteria: text}
    ))
  }

  render() {
    return (
      <div>
          
          <FilterMovie 
            setCriteria={this.setCriteria} 
            criteria={this.state.criteria}
          />


          <ListMovies 
            removeMovie={this.removeMovie}
            moviesDataMain={this.state.movies} 
            criteria={this.state.criteria}
            setCriteria={this.setCriteria} />
        
      </div>
    );
  }
}

export default App;
