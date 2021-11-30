import React from 'react';

import './ProductTileList.scss';
import { ProductTile } from '../ProductTile';

const ProductTileList = ({productList}) => {
  const render = () => {
    return productList.map(({ title, image, imageone, url, price, brand }) => (
      <ProductTile key={`${url}-${price}-${brand}`} title={title} image={image} imageone={imageone} />
    ));
  };

  return (
    <div className="product-tile-list">{render()}</div>
  );
};

export default ProductTileList;
