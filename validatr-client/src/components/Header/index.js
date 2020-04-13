import React, { Component } from "react";

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
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

export default Header;