import React from "react";
import Button from "react-bootstrap/Button";
import { BsArrowRepeat } from "react-icons/bs";
import "./LoaderButton.css";

const LoaderButton = (props) => {
    return (
        <Button
            disabled={props.disabled || props.isLoading}
            className={`LoaderButton ${props.className}`}
            {...props}
        >
            {props.isLoading && <BsArrowRepeat className="spinning" />}
            {props.children}
        </Button>
    )
}

export default LoaderButton