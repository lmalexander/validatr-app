import React, { Component } from "./node_modules/react";
import Jumbotron from './node_modules/react-bootstrap/Jumbotron';
import Container from './node_modules/react-bootstrap/Container';


class ValJumbotron extends Component {

    render() {
        return(
            <Jumbotron fluid>
                <Container>
                    <h1>validatr</h1>
                </Container>
            </Jumbotron>
        )
    }
}

export default ValJumbotron;