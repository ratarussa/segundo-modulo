import React from "react"
import { Container, Tabs, Tab } from "react-bootstrap"
import ContactoContainer from "../contacto/Contacto"
import PracticoContainer from "../practico/Practico"

const SectionContainer = () => {
    return (
        <Container>
            <Tabs defaultActiveKey="form" transition={false} id="section">
                <Tab eventKey="form" title="Formulario Contacto">
                    <ContactoContainer />
                </Tab>
                <Tab eventKey="exm" title="Ejercicios Practicos">
                    <PracticoContainer />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default SectionContainer