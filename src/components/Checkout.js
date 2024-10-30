import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handlePurchase = () => {
    alert('Gracias por tu compra');
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <h3>Productos a comprar:</h3>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <p>Nombre: {product.name}</p>
                <p>Precio: {product.price} USD</p>
                <hr />
              </li>
            ))}
          </ul>
          <button onClick={handlePurchase}>Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
