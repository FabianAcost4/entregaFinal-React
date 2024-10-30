import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; // Asegúrate de tener este archivo CSS en la misma carpeta

const Item = ({ product }) => {
  return (
    <div className="item">
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <Link to={`/item/${product.id}`} className="item-detail-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;
