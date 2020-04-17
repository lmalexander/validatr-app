import React, { Component } from "./node_modules/react";
import Navbar from './node_modules/react-bootstrap/Navbar';

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
                    />{' '}
                    validatr
                    </Navbar.Brand>
                </Navbar>
            </div>  
        )
    }
}

export default ValHeader;