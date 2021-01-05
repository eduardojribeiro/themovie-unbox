import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Routes from '@/Routes';

window._ = require('lodash')
window.$ = window.jQuery = require("jquery");

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Routes></Routes>
      </div>
    )
  }
}

export default hot(module)(App);