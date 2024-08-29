import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchField from '../components/SearchField';

const ProductsPage = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="products-page">
      <div className='products-wrapper'>
        <p>Products</p>
        <SearchField value={search} onChange={handleSearchChange} />
      </div>
     
      <ProductList search={search} />
    </div>
  );
};

export default ProductsPage;
