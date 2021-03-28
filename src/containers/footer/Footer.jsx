import React from "react"
import { Row, Col, Container } from "react-bootstrap"

const FooterContainer = () => {
    return (
        <Container>
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <Row>
                    <Col xs={12}>
                        <small className="d-block m-0 text-muted">© Tarea realizada por RataRussa.</small>
                    </Col>
                </Row>
            </footer>
        </Container >
    )

}

export default FooterContainer