import React from 'react';
import CartItem from'./CartItem';

const CartItems = (props) => {
    var renderedCart = props.cartItemList.map(cartThing => {
        return <CartItem key={cartThing.id} name={cartThing.product.name} price={cartThing.product.priceInCents} quantity={cartThing.quantity} />
    })
    return ( 
        <>
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {renderedCart}
                </div>
            </div>   
        </>
    )
}

export default CartItems