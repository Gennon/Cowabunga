import React, { Component } from 'react';
import { Button, Col, Jumbotron } from 'react-bootstrap'

export default class App extends Component {
    render() {
        return (
            <Col md={12} >
                <Jumbotron>
                    <h1>Cowabunga!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            </Col>
        );
    }
}
