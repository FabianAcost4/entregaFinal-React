import React, { useEffect, useState } from 'react';
import Item from './Item';
import products from '../data/Products'; // Asegúrate de que el nombre de tu archivo sea 'products.js'

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div className="item-list">
      {items.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
