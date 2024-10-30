import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} USD</p>
          <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
