import React from "react"
import Navbar from "react-bootstrap/Navbar"
import MenuContainer from "../menu/Menu"

const HeaderContainer = () => {
    return (
        <Navbar collapseOnSelect bg="white" expand="md" className="p-3 mb-3 border-bottom shadow-sm">
            <Navbar.Brand className="font-weight-bold text-muted">Tarea N°2</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <MenuContainer />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderContainer