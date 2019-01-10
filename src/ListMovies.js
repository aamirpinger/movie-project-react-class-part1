import React, { Component } from 'react';


class ListMovies extends Component {

    onDelete = (event) => {
        this.props.removeMovie(event.target.value)
    }

    clearCriteria = (event) => {
        this.props.setCriteria('')
    }
    render(){
        const {moviesDataMain, criteria} = this.props
        const filteredMovieList = (criteria !== '') 
        ? moviesDataMain.filter((m) => 
        (m.name.toLowerCase().indexOf(criteria.toLowerCase()) !== -1))
        : moviesDataMain
    
        return(
     <div>
         {
             (criteria !== '') 
             && <div className="showing-movies">
                 Showing movies {filteredMovieList.length} out of {moviesDataMain.length} records 
                 {(filteredMovieList.length !== moviesDataMain.length) 
                && <button onClick={this.clearCriteria}>Show All</button>}
                </div>
         }
        <div className="movie-list">
            {
                filteredMovieList.map((movie) => (
                  <div key={movie.id} className="movie-list-item">
                    <img src={movie.posterURL}
                         className="movie-poster" 
                         alt={movie.id}/>
                    <div className="movie-details">
                        <p>{movie.name}</p>
                        <p>{movie.category}</p>
                    </div>
                    <button 
                        className="movie-remove"
                        onClick={this.onDelete}
                        value={movie.id}
                        >Remove</button>
                  </div>
                ))
              }       
        </div>
        </div>         
        )
    }
}

export default ListMovies