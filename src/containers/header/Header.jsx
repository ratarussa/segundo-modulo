import React from "react"
import Navbar from "react-bootstrap/Navbar"
import MenuContainer from "../menu/Menu"

const HeaderContainer = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
            <Navbar.Brand className="font-weight-bold text-muted">
                Tarea02
        </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <MenuContainer />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderContainer