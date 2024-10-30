import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff'}}>
      <Link to="/" style={{ margin: '0 15px', color: 'purple', textDecoration: 'none' }}>
        Market_Col
      </Link>
      <Link to="/cart" style={{ margin: '0 15px', color: 'purple', textDecoration: 'none' }}>
        Carrito
      </Link>
      <Link to="/checkout" style={{ margin: '0 15px', color: 'purple', textDecoration: 'none' }}>
        Checkout
      </Link>
    </nav>
  );
};

export default NavBar;
