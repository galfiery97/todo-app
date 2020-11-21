import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <FontAwesomeIcon className="nav-title" icon={faClipboard} />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        </Navbar>
    );
}
export default Header;