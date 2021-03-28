import { useState } from "react";

const FormFields = (initialState) => {
    const [fields, setValues] = useState(initialState)

    return [
        fields,
        function (event) {
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            })
        }
    ]
}

export default FormFields