import React from 'react';

const CartItem = (props) => {
    return ( 
        <>
            <div className="collection-item">
                <div className="list-group-item" key={CartItem.id}>
                    <div className="row">
                        <div className="col-md-8">{props.name}</div>
                        <div className="col-md-2">{props.price}¢</div>
                        <div className="col-md-2">{props.quantity}</div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default CartItem