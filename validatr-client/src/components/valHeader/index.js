import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class ValHeader extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    validatr
                    </Navbar.Brand>
                    <Button 
                        as="input"
                        type="submit"
                        value="logout" />
                </Navbar>
            </div>  
        )
    }
}

export default ValHeader;