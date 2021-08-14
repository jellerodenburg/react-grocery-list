import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
    return (
        <div className="grocery-list">
            <h1>Boodschappenlijst</h1>
            <InputField addNewItem={props.addNewItem} handleChange={props.handleChange} newItemInput={props.newItemInput} />
            <List array={props.list} clickItem={props.clickItem} hasClickFunctionality={true} />
        </div>
    )
}

export default GroceryList