import React from 'react';
import BootstrapJumbotron from 'react-bootstrap/Jumbotron';

function Jumbotron(props) {
    return (
        <BootstrapJumbotron>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </BootstrapJumbotron>
    )
}

export default Jumbotron;