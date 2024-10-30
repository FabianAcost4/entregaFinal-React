import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
