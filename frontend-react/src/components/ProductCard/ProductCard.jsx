import React from 'react';
import './ProductCard.css'; // Usando CSS puro
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <button className="buy-button" onClick={handleAddToCart}>
          <FaWhatsapp className="whatsapp-icon" />
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;