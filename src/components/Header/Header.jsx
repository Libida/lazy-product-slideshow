import React from 'react';

import './Header.scss';

import { Image } from '../Image';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a className="header__link">
        <Image alternativeText="The Sole Supplier" src={logo} wrapperClassname="header__logo-wrapper"
               imgClassname="header__logo-img"/>
      </a>
    </header>
  );
};

export default Header;
