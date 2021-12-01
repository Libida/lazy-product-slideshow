import React from 'react';

import { Image } from '../Image';

const ProductImage = ({ image, imageone, ...otherProps }) => {
  const imgSrc = image || imageone;

  return (
    <Image src={imgSrc} {...otherProps} />
  );
};

export default ProductImage;
