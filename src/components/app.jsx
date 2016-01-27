import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
    greeting: {
        id: 'app.greeting',
        description: 'Welcome greeting to the user',
        defaultMessage: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    },
    buttonText: {
        id: 'app.button',
        description: 'The text on the button',
        defaultMessage: 'Learn more'
    }
});

export default class App extends Component {    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Cowabunga!</h1>
                    <p><FormattedMessage {...messages.greeting} /></p>
                    <p><Button bsStyle="primary"><FormattedMessage {...messages.buttonText} /></Button></p>
                </Jumbotron>
            </div>
        );
    }
}
