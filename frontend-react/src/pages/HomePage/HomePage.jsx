import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import GenderFilter from '../../components/GenderFilter/GenderFilter';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

import {
  productsDataWithIds,
  allProductsArray,
  femaleCategories,
  maleCategories,
  allCategories
} from '../../utils';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [activeGender, setActiveGender] = useState('feminina');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableCategories, setAvailableCategories] = useState(femaleCategories);

  useEffect(() => {
    let productsToFilter = [];

    if (activeGender === 'feminina') {
      productsToFilter = productsDataWithIds.feminina;
    } else if (activeGender === 'masculina') {
      productsToFilter = productsDataWithIds.masculina;
    } else {
      productsToFilter = allProductsArray;
    }

    if (activeCategory !== 'todas') {
      productsToFilter = productsToFilter.filter(
        (product) => product.category === activeCategory
      );
    }

    setFilteredProducts(productsToFilter);

  }, [activeCategory, activeGender]);

  useEffect(() => {
    if (activeGender === 'feminina') {
      setAvailableCategories(femaleCategories);
    } else if (activeGender === 'masculina') {
      setAvailableCategories(maleCategories);
    } else {
      setAvailableCategories(allCategories);
    }
    setActiveCategory('todas');
  }, [activeGender]);

  return (
    <div className="homepage-container">
      <Header />
      <main className="main-content">
        <div className="details">
          <h3 className="title">- Popular -</h3>
          <h1 className="subtitle">Confira</h1>
        </div>
        <GenderFilter
          genders={['feminina', 'masculina', 'todos']}
          activeGender={activeGender}
          onSelectGender={setActiveGender}
        />
        <CategoryFilter
          categories={availableCategories}
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