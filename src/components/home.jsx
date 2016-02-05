import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';


export default class App extends Component {    
  render() {
    const title = (
       <h3>News</h3>
    );
    return (
      <Panel header={title} bsStyle="info">
        The latest news is that it is now possible to view this page!
      </Panel>
    );
  }
}