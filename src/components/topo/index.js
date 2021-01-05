import React, { Component } from 'react';

class Topo extends Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
	}
  render() {
    return (
	      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	        <a className="navbar-brand" href="#">The Movie - UnBox</a>
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>
	        <div className="collapse navbar-collapse" id="navbarCollapse">
	          <ul className="navbar-nav mr-auto">
	            <li className="nav-item active">
	              <a className="nav-link" href="#">Movies <span className="sr-only">(current)</span></a>
	            </li>
	            <li className="nav-item">
	              <a className="nav-link" href="#">Series</a>
	            </li>
	          </ul>
	          <form className="form-inline mt-2 mt-md-0">
	            <input className="form-control mr-sm-2" type="text" placeholder="Filme ou Série" aria-label="Buscar" /> 
	            <button className="btn btn-outline-success my-2 my-sm-0" value={this.state.value} onClick={()=>this.props.searchCallback(this.state.value)} type="button">Buscar</button>
	          </form>
	        </div>
	      </nav>
    )
  }
}

export default Topo;