import React from 'react';

import './ProductTileListSlideshow.scss';
import { ProductTileModalList } from '../ProductTileModalList';

import productList from '../../data/products.json';

const ProductTileListSlideshow = ({}) => {
  return <ProductTileModalList productList={productList} />;
};

export default ProductTileListSlideshow;
