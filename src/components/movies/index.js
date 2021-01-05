import React, { Component } from 'react';

class Movies extends Component {
	constructor(props){
		super(props);
		console.log(this.props.movies);
	}
  render() {
    return (
	      <>
	      	<h2>Results</h2>
	      	<div className='movies'>
	      		{this.props.movies.map((movie, i) => {    
           		return (<div>{movie.name}</div>) 
        		})}
	      	</div>
	      </>
    )
  }
}

export default Movies;