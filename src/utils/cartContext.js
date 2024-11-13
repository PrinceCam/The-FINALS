import React, { createContext, useState, useContext } from 'react';


// Create the Cart Context
const CartContext = createContext();
// Custom hook to access CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Create the CartProvider to wrap the app with cart state
export const CartProvider = ({ children }) => {
    // Initialize the cart as an empty array
    const [cart, setCart] = useState([]);
    // Add a product to the cart
    const addToCart = (products) => {
        setCart((prevCart) => {
            // Check if product is already in the cart
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // If product is already in cart, update the quantity
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // If product is not in cart, add it
            return [...prevCart, { ...products, quantity: 1 }];
        });
    };

// Remove a product from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };
    // Update quantity of a product in the cart
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart((prevCart) =>
                prevCart.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};