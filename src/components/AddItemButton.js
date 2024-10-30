// src/components/AddItemButton.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const AddItemButton = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Manejador de la cantidad de productos
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  // Agrega el producto al carrito con la cantidad seleccionada
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        style={{ width: '50px', marginRight: '5px' }}
      />
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default AddItemButton;
