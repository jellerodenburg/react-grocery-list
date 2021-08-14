import React from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Pak melk" }
            ],
            shoppingListItems: [
                { id: 3, title: "Jam", amount: 1 },
                { id: 4, title: "Bier", amount: 1 }
            ],
            counter: 5,
            newItemInput: ""
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
    }

    addAmountToItem(input) {
        this.setState(prevState => ({
            shoppingListItems: prevState.shoppingListItems.map(
                el => el.title === input ? { ...el, amount: el.amount + 1 } : el
            )
        }))
    }

    handleClickGroceryItem(input) {
        if (this.state.shoppingListItems.some(e => e.title === input)) {
            this.addAmountToItem(input)
        } else {
            this.setState(prevState => ({
                shoppingListItems:
                    [...prevState.shoppingListItems,
                    { id: this.state.counter + 1, title: input, amount: 1 }]
            }))
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
        }
    }

    emptyCart() {
        this.setState({
            shoppingListItems: []
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    addNewItem(title) {
        if (title !== "") {
            this.setState(prevState => ({
                groceryItems:
                    [...prevState.groceryItems,
                    { id: this.state.counter + 1, title: title }]
            }))
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
        } else {
            return
        }
    }

    render() {
        const groceryItemsArray = this.state.groceryItems
        const shoppingListItemsArray = this.state.shoppingListItems
        return (
            <div className="container">
                <GroceryList
                    list={groceryItemsArray}
                    clickItem={this.handleClickGroceryItem}
                    addNewItem={this.addNewItem}
                    handleChange={this.handleChange}
                    newItemInput={this.state.newItemInput}
                />
                <ShoppingCart
                    list={shoppingListItemsArray}
                    emptyCart={this.emptyCart}
                />
            </div >
        )
    }
}

export default Container