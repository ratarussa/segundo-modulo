import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Contacto.css"

const ContactoContainer = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="Login">
            <form onSubmit="{handleSubmit}">
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        value={phoneNumber}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea" rows={3}
                        value={message}
                    />
                </Form.Group>
                <Button block size="lg" type="submit">Contact</Button>
            </form>
        </div>
    )
}

export default ContactoContainer