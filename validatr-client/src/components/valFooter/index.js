import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class ValFooter extends Component {

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
                    system X.V-0.21467
                    </Navbar.Brand>
                </Navbar>
            </div>  
        )
    }
}

export default ValFooter;