import React, { Component } from 'react';
import BannerSoul from '../../images/disney-pixar-soul-poster-disney-plus-header.webp'
import Topo from '@/components/Topo';
import MoviesComp from '@/components/Movies';

class Moveis extends Component{
	constructor(props){
		super(props);
		this.state = { movies: [] };
	}
	searchCallback(childData){
		let that = this;
    fetch('https://api.themoviedb.org/3/search/company?api_key=de31681c1f4d771b4fc899ce68d63423&page=1&query=' + childData).then(function(response) {
		  var contentType = response.headers.get("content-type");
		  if(contentType && contentType.indexOf("application/json") !== -1) {
		    return response.json().then(function(json) {
		      that.state.movies = json.results;
		    });
		  }
		});
	}
  render(){
    return (
      <div>
      	<div className='container-fluid'>
      		<Topo searchCallback = {this.searchCallback.bind(this)} ></Topo>
      		<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      			<img className='img-fluid' src={BannerSoul} />
      		</div>
      		<MoviesComp movies={this.state.movies} ></MoviesComp> 
      	</div>
      </div>
      )
  }
}

export default Moveis