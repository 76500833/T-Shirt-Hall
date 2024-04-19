//import React from 'react'

//function shirtCart() {

    //return(
        //<div>
           // <img src="/path/to/your/cart-logo.png" alt="Cart Logo" />
            //<h1>CART</h1>
           // </div>
  //  )
//}

//export default shirtCart

import React, { useState } from 'react'

function ShirtCart() {
    const [cartItems, setCartItems] = useState([]); // Initialize an empty cart
    const [showCart, setShowCart] = useState(false); // State to handle showing the cart

    const handleCartClick = () => {
        setShowCart(!showCart); // Toggle showing the cart
    }

    return(
        <div>
            <button onClick={handleCartClick}>
                <img src="/path/to/your/cart-logo.png" alt="" />
            </button>
            {showCart && 
                <div>
                    <h1>CART</h1>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            }
        </div>
    )
}

export default ShirtCart

