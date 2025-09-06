
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const productsData = [
  { id: 1, name: 'Argola Estilizada', price: 59.90, category: 'argolas', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Argola Dourada', price: 49.90, category: 'argolas', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Brinco Pérola', price: 39.90, category: 'brincos', image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Brinco Prateado', price: 29.90, category: 'brincos', image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Colar Coração', price: 69.90, category: 'colares', image: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Colar Pedra Azul', price: 79.90, category: 'colares', image: 'https://via.placeholder.com/200' },
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    if (activeCategory === 'todas') {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory]);

  return (
    <div className="homepage-container">
      <Header />
      <main className="main-content">
        <div className="details">
          <h3 className="title">- Popular -</h3>
          <h1 className="subtitle">Confira</h1>
        </div>
        <CategoryFilter
          categories={['todas', 'argolas', 'brincos', 'colares']}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;