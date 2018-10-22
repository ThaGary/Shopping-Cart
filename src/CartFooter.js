import React from 'react';

const CartFooter = (props) => {
    return ( 
        <>
            <nav className="navbar navbar-dark fixed-bottom bg-dark">
                <a className="navbar-brand" href="index.html">{props.copyright}</a>
            </nav>   
        </>
    )
}

export default CartFooter