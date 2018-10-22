import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';
import TotalPrice from './total'


class App extends Component {
  constructor(){
    super();
    this.state = {
      cartItemList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ], 
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      quantity: 0,
      item: '',
      price: 0,
  }
}


itemSelect = (event) => {
  let [name, price] = event.target.value.split("-")
  this.setState({item: name})
  this.setState({price: price})
}
quantityChange = (event) => {
  this.setState({quantity: event.target.value})
}

 addItem = (event) => {
    event.preventDefault()

    var newItem = {
      id: this.state.cartItemList.length +1,
      product: {
        id: 40,
        name: this.state.item,
        priceInCents: this.state.price,
      },
      quantity: this.state.quantity
    }
    this.setState({
      cartItemList: [...this.state.cartItemList, newItem]
    })
 }

  render() {
    return (
      <>
        <CartHeader />
        <CartItems cartItemList = {this.state.cartItemList}/>
        <TotalPrice cartItemList = {this.state.cartItemList}/>
        <AddItem productList = {this.state.products} addItem = {this.addItem} itemSelect = {this.itemSelect} quantityChange = {this.quantityChange}/>
        <CartFooter copyright = "&copy; 2016" />
      </>
    );
  }
}

export default App;
