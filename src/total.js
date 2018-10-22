import React from 'react';

const TotalPrice = (props) => {
    console.log(props)
    var itemTotal = 0
    const TotalPrice = props.cartItemList.map(item => {
    itemTotal += ((item.product.priceInCents * item.quantity) /100)
    })
    return(
        <div className="container">
            <div className="row">
                <h4>Total: {"$" + itemTotal.toFixed(2)}</h4>
            </div>
        </div>
    )
 }
 
 export default TotalPrice