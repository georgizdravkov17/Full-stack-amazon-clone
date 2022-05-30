import React from 'react';
import products from '../../data.js';
import { ProductCard } from '../../components/components.js';
import './HomeScreen.css';

const HomeScreen = () => {

  const printProducts = () => {
     return products.map(product => <ProductCard product={product} />)
  }

  return (
    <div className="products">
        { printProducts() }
    </div>
  )
}

export default HomeScreen