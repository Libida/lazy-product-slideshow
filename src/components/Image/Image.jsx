import React, { useState } from 'react';
import classNames from 'classnames';

import './Image.scss';

const Image = ({ src: incomeSrc, wrapperClassname, imgClassname, alternativeText }) => {
  const [src, setSrc] = useState(incomeSrc);
  const [isError, setIsError] = useState(false);

  const handleSrcError = (e) => {
    e.target.onerror = null;
    setSrc('');
    setIsError(true);
  };

  return (
    <span className={classNames('img-wrapper', wrapperClassname, {
      'img-wrapper--error': isError,
    })}>
      <img className={classNames('img', imgClassname)} src={src} onError={handleSrcError} alt={alternativeText}/>
    </span>
  );
};

export default Image;
