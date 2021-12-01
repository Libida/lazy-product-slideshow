import React, { Suspense, lazy, useState, useEffect } from 'react';

import { getProducts } from '../../utils/products/products';
import { splitOnChunks } from '../../utils/array/array';
import { useInterval } from '../../hooks/useInterval';
import { Loader } from '../Loader';

const ProductTileModalListLazy = lazy(() => import('../ProductTileList'));

const ProductSlideshow = ({}) => {
  const [productSlides, setProductSlides] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [productSlide, setProductSlide] = useState([]);
  const amountOfProductsInSlide = 8;
  const slideTiming = 12000;

  const changeSlide = () => {
    if (slideNumber < productSlides.length) {
      setProductSlide(productSlides[slideNumber]);
    } else {
      setProductSlide(productSlides[0]);
      setSlideNumber(0);
    }
  };

  const changeSlideNumber = () => {
    if (slideNumber < productSlides.length) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  };

  useEffect(() => {
    getProducts()
      .then(data => {
          setProductSlides(splitOnChunks(data, amountOfProductsInSlide));
        }
      ).catch(() => {
        alert("Sorry, something went wrong. Please try in several minutes.");
    });
  }, []);

  useEffect(() => {
    changeSlide();
  }, [productSlides, slideNumber]);

  useInterval(() => {
    changeSlideNumber();
  }, slideTiming);

  return (
    <Suspense fallback={<Loader/>}>
      <ProductTileModalListLazy productList={productSlide}/>
    </Suspense>
  );
};

export default ProductSlideshow;
