import React, { Component } from 'react';
import ListMovies from './ListMovies';
import FilterMovie from './FilterMovie'

class App extends Component {


  state = {
    movies: [
      {
        "id": "matrix",
        "name": "Matrix",
        "category": "fiction",
        "posterURL": "https://c1.staticflickr.com/9/8819/17072638696_f871731849_n.jpg"
      },
      {
        "id": "avengers",
        "name": "Avengers Captain America Hawkeye",
        "category": "Superhero",
        "posterURL": "https:////c1.staticflickr.com/8/7215/6976089458_e23538854b_m.jpg"
      },
      {
        "id": "amazingspiderman",
        "name": "The Amazing Spider-man",
        "category": "Superhero",
        "posterURL": "https:////c1.staticflickr.com/8/7249/7088374885_d0061c5910_m.jpg"
      }
    ],
    criteria: ''  
  }

  removeMovie = (movie) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter((m) => m.name !== movie )
    }))
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
