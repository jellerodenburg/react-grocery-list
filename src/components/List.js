import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const listItems = props.array.map(function (item) {
        if (props.hasClickFunctionality) {
            return <ListItem
                key={item.id}
                id={item.id}
                className="list-item"
                onClick={props.clickItem}
                value={item.title} />
        } else {
            return <ListItem
                key={item.id}
                id={item.id}
                className="list-item"
                value={item.title}
                amount={item.amount} />
        }
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List