import React from 'react';

import './ProductTileModalList.scss';
import { ProductTileWithModal } from '../ProductTileWithModal';

const ProductTileModalList = ({ productList = [] }) => {
  if (!productList?.length) {
    return null;
  }

  const render = () => {
    return productList.map((productProps) => {
      const { url, price, brand } = productProps;

      return (
        <ProductTileWithModal key={`${url}-${price}-${brand}`} {...productProps} />
      );
    });
  };

  return (
    <div className="product-tile-list">{render()}</div>
  );
};

export default ProductTileModalList;
