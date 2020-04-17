import React, { Component } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

class ValidatrHome extends Component {

    render() {
        return(
            <ButtonGroup vertical size="lg">
                <Button href="/nevermind">Launch NeverMind</Button>
                <Button disabled>Launch dTube</Button>
                <Button disabled>Launch Dirty Miner</Button>
            </ButtonGroup>   
        )
    }
}

export default ValidatrHome;