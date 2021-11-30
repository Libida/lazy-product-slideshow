import React, { Suspense, useState, useEffect } from 'react';

import { getProducts } from '../../utils/products/products';
import './ProductTileListSlideshow.scss';
import { ProductTileModalList } from '../ProductTileModalList';

const ProductTileListSlideshow = ({}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getProducts();

      setProducts(data);
    };
    loadData();
  }, []);

  return <Suspense fallback={<h1>Loading...</h1>}><ProductTileModalList productList={products}/></Suspense>;
};

export default ProductTileListSlideshow;
