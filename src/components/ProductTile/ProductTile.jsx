import React from 'react';

import { Image } from '../Image';
import './ProductTile.scss';

const ProductTile = ({ title, image, imageone }) => {
  const imgSrc = image || imageone;

  return (
    <button className="product-tile">
      <span className="product-tile-inner">
        <Image wrapperClassname="product-tile__img-wrapper" imgClassname="product-tile__img" src={imgSrc}
               alternativeText={title}/>
        <h3 className="product-tile__title">{title}</h3>
      </span>
    </button>
  );
};

export default ProductTile;
