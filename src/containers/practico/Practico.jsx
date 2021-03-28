import React, { useState } from "react"
import { Card } from "react-bootstrap"

const PracticoContainer = () => {

    const [items, setItems] = useState(['Item 1', 'Item 2'])

    const Item = ({ children }) => {
        return (<div>{children}</div>)
    }

    const [name, setName] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    return (
        <div className="container mt-4">
            <Card className="my-2">
                <Card.Body>
                    <Card.Title>1.- Listar elementos</Card.Title>
                    {items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </Card.Body>
            </Card>
            <Card className="my-2">
                <Card.Body>
                    <Card.Title>2.- Listar Componentes</Card.Title>
                    {items.map((item, index) => (
                        <Item key={index}>{item}</Item>
                    ))}
                </Card.Body>
            </Card>
            <Card className="my-2">
                <Card.Body>
                    <Card.Title>3.- Manejo de Input</Card.Title>
                    <input value={name} onChange={handleChange} />
                </Card.Body>
            </Card>
        </div>
    )

}

export default PracticoContainer