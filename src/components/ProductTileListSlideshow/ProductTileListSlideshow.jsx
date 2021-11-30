import React from 'react';

import './ProductTileListSlideshow.scss';
import { ProductTileList } from '../ProductTileList';

import productList from '../../data/products.json';

const ProductTileListSlideshow = ({}) => {
  return <ProductTileList productList={productList} />;
};

export default ProductTileListSlideshow;
