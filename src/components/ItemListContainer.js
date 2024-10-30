import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/Products'; // Asegúrate de que esté en mayúscula
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h2>Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price} USD</p>
            <Link to={`/item/${product.id}`}>
              <button>Ver detalles</button>
            </Link>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
