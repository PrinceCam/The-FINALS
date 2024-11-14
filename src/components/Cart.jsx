import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { Box } from "@mui/material"; 

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext); 

  return (
    <Box>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Box>
  );
}

export default Cart;
