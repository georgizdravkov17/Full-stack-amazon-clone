import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({product: { id, name, image, price, brand }}) => {

  const navigate = useNavigate();

  return (
    <div className="product">
        <div className="img" onClick={() => { navigate(`/products/${id}`) }}>
             <img src={image} alt={name} />
        </div>
        <div className="info">
            <h3 onClick={() => { navigate(`/products/${id}`) }}>{name}</h3>
            <h5 className="price">${price}</h5>
            <div className="down-part">
                <Button variant="secondary">Add to card</Button>
                <p>{brand}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard