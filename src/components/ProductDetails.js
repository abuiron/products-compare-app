import React, { useState } from 'react';
import ProductTable from './ProductTable';

const ProductDetails = ({ onAddToCompare }) => {
  const [compareList, setCompareList] = useState([]);

  const handleCompare = (product) => {
    if (compareList.length < 4 && !compareList.some(item => item.id === product.id)) {
      setCompareList([...compareList, product]);
      onAddToCompare(product);
    }
  };

  return (
    <div className="product-details">
      <ProductTable onCompare={handleCompare} />
    </div>
  );
};

export default ProductDetails;
