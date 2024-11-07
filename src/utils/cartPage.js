import React from 'react';
import { useCart } from './cartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const handleRemove = (productId) => {
        removeFromCart(productId); // Remove product from the cart
    };
    const handleQuantityChange = (productId, quantity) => {
        updateQuantity(productId, quantity); // Update quantity of product
    };

return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>${item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}

<div>
                        <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};
export default CartPage;