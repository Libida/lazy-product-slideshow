import React, { useState } from 'react';

import { ProductTile } from '../ProductTile';
import { Modal } from '../Modal';
import { ProductDetails } from '../ProductDetails';
import { Portal } from '../Portal';

const portalElement = document.getElementById('modal-root');

const ProductTileWithModal = ({ title, image, imageone, url, price, discountPrice, currency, brand }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleIsModalOpened = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <ProductTile imageone={imageone} image={image} title={title} handleClick={toggleIsModalOpened}>
      <Portal portalElement={portalElement}>
        <Modal handleClose={toggleIsModalOpened} isModalOpened={isModalOpened}>
          <ProductDetails title={title} image={image} imageone={imageone} url={url} price={price}
                          discountPrice={discountPrice} currency={currency} brand={brand}/>
        </Modal>
      </Portal>
    </ProductTile>
  );
};

export default ProductTileWithModal;
