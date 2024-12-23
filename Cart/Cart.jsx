import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  // Define the max quantity limit
  const MAX_QUANTITY = 3;

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.newPrice * item.quantity), 0);
  };

  // Initialize the cart with quantity if not already present
  useEffect(() => {
    setCart(cart.map(item => ({
      ...item,
      quantity: item.quantity || 1  // Default quantity to 1 if not set
    })));
  }, [cart, setCart]);

  // Handle the removal of an item
  const handleRemove = (title) => {
    const updatedCart = cart.filter(item => item.title !== title);
    setCart(updatedCart);
  };

  // Handle increase and decrease in quantity with limit for increment
  const handleQuantityChange = (title, change) => {
    const updatedCart = cart.map(item => {
      if (item.title === title) {
        let newQuantity = item.quantity + change;
        // Ensure the quantity is between 1 and MAX_QUANTITY
        newQuantity = Math.max(1, Math.min(newQuantity, MAX_QUANTITY));
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map(({ img, title, newPrice, quantity }) => {
          return (
            <div className="cart-box" key={title}>
              {/* Image and Title Section */}
              <div className="cart-img">
                <img src={img} alt={title} />
                <p>{title}</p>
              </div>
              {/* Quantity Buttons */}
              <div className="cart-quantity">
                <button onClick={() => handleQuantityChange(title, 1)} disabled={quantity >= MAX_QUANTITY}>+</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(title, -1)} disabled={quantity <= 1}>-</button>
              </div>
              {/* Price and Remove Button */}
              <div className="cart-info">
                <span>Rs {newPrice * quantity}</span>
                <button className="remove-btn" onClick={() => handleRemove(title)}>Remove</button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-cart-message">
          {/* This block will only render when the cart is empty */}
          <p>Your cart is currently on vacation. Bring it back to work!</p>
        </div>
      )}
      {/* Cart Total Section */}
      {cart.length > 0 && (
        <div className='cart-total'>
          <span>Total price of your cart: </span>
          <span className='total-amount'>Rs {calculateTotalPrice()}</span>
        </div>
      )}
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Example: 'cart' should be an array
  setCart: PropTypes.func.isRequired, // 'setCart' should be a function
};
export default Cart;
