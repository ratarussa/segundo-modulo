import React from "react"
import { Tabs, Tab } from "react-bootstrap"
import ContactoContainer from "../contacto/Contacto"
import PracticoContainer from "../practico/Practico"

const SectionContainer = () => {
    return (
        <div className="container">
            <Tabs defaultActiveKey="form">
                <Tab eventKey="form" title="Formulario Contacto">
                    <ContactoContainer />
                </Tab>
                <Tab eventKey="exm" title="Ejercicios Practicos">
                    <PracticoContainer />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SectionContainer