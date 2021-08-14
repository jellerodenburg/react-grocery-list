import React from "react"

function InputField(props) {
    return (
        <div>
            <input
                placeholder="Nieuwe boodschap"
                value={props.newItemInput}
                onChange={props.handleChange}
                name="newItemInput"
            />
            <button onClick={() => { props.addNewItem(props.newItemInput) }}>Voeg toe</button>
        </div>
    )
}

export default InputField