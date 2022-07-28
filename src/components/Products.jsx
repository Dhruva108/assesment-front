import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ list }) => (
  <div className="main-container">
    {
      list.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))
    }
  </div>
);

Products.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default Products;
