import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import LoaderButton from "../../components/LoaderButton"
import "./Contacto.css"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const ContactoContainer = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0 &&
            phoneNumber.length > 0 &&
            message.length > 0
    }

    async function handleSubmit(event) {
        event.preventDefault()

        setIsLoading(true)

        await sleep(2000)

        alert("Submitted Form")

        setEmail('')
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setMessage('')
        
        setIsLoading(false)
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <LoaderButton
                    block
                    size="lg"
                    type="submit"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Contact
                </LoaderButton>
            </form>
        </div>
    )
}

export default ContactoContainer