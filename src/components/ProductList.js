// ProductList.js
import React from 'react';
import AddItemButton from './AddItemButton';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <AddItemButton product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
