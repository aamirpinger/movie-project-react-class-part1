import React, { Component } from 'react';

class FilterMovie extends Component {
    
    userInputChange = (event) => {
        const newText = event.target.value
        this.props.setCriteria(newText)
    }

    render(){
        return(
                <input type="text"
                    value={this.props.criteria}
                    onChange={this.userInputChange}
                    className="search-movies"
                />
        )
    }
}

export default FilterMovie