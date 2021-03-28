import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import LoaderButton from "../../components/LoaderButton"
import FormFields from "../../libs/FormFieldsLib"
import "./Contacto.css"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const ContactoContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [fields, handleFieldChange] = FormFields({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        message: '',
    })

    function validateForm() {
        return fields.email.length > 0 &&
            fields.firstName.length > 0 &&
            fields.lastName.length > 0 &&
            fields.phoneNumber.length > 0 &&
            fields.message.length > 0
    }

    async function handleSubmit(event) {
        event.preventDefault()

        setIsLoading(true)

        await sleep(2000)

        alert("Submitted Form")

        fields.email = ''
        fields.firstName = ''
        fields.lastName = ''
        fields.phoneNumber = ''
        fields.message = ''

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
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fields.firstName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fields.lastName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="phone"
                        value={fields.phoneNumber}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={fields.message}
                        onChange={handleFieldChange}
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