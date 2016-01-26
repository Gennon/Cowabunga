import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
    greeting: {
        id: 'app.greeting',
        description: 'Welcome greeting to the user',
        defaultMessage: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    }
});

export default class App extends Component {    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Cowabunga!</h1>
                    <p><FormattedMessage {...messages.greeting} /></p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            </div>
        );
    }
}
