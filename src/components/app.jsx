import React, { Component } from 'react';
import DevTools from '../containers/dev-tools';
import NavBar from './navbar';

export default class App extends Component {    
  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
        <DevTools />
      </div>
    );
  }
}
