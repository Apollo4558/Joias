import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  const handleAddToCart = (product) => {
    // Substitua SEU_NUMERO_DE_WHATSAPP pelo número de telefone da sua loja (incluindo o código do país)
    const whatsappNumber = '77998161239'; 

    const message = encodeURIComponent(
      `Olá, gostaria de comprar o seguinte produto: \n` +
      `Produto: ${product.name}\n` +
      `Preço: R$ ${product.price.toFixed(2)}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;