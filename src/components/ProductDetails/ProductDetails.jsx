import React from 'react';

import './ProductDetails.scss';
import { ProductImage } from '../ProductImage';

const ProductDetails = ({ title, image, imageone, url, price, discountPrice, currency, brand }) => {
  return (
    <section className="product-details">
      <ProductImage wrapperClassname="product-details__img-wrapper" imgClassname="product-details__img"
                    alternativeText={title} imageone={imageone} image={image}/>
      <div className="product-details__info">
        <p className="product-details__title">{title}</p>
        <p className="product-details__price">Price: {price}{currency}</p>
        {discountPrice && <p className="product-details__discount-price">Discount Price: {discountPrice}{currency}</p>}
        <p className="product-details__brand">Brand: {brand}</p>
        <a href={url} target="_blank" className="product-details__link">See full details</a>
      </div>
    </section>
  );
};

export default ProductDetails;
