// src/components/CartWidget.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useCart();

  // Calcula el total de productos en el carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.cartWidget}>
      <span role="img" aria-label="cart">🛒</span>
      <span>{totalItems}</span> {/* Muestra la cantidad total */}
    </div>
  );
};

const styles = {
  cartWidget: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
};

export default CartWidget;
