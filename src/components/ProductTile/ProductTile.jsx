import React from 'react';

import { ProductImage } from '../ProductImage';
import './ProductTile.scss';

const ProductTile = ({ title, image, imageone, handleClick, children }) => {

  return (
    <button className="product-tile" onClick={handleClick}>
      <span className="product-tile-inner">
        <ProductImage wrapperClassname="product-tile__img-wrapper" imgClassname="product-tile__img"
                      alternativeText={title} imageone={imageone} image={image}/>
        <h3 className="product-tile__title">{title}</h3>
      </span>
      {children}
    </button>
  );
};

export default ProductTile;
