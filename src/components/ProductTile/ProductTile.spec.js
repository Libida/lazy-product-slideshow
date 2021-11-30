import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import ProductTile from './ProductTile';

describe('ProductTile', () => {
  const initialProps = {};
  const wrapper = (props) => shallow(<ProductTile {...props} />);

  test('should match snapshot for default initial props', () => {
    expect(wrapper(initialProps)).toMatchSnapshot();
  });
});
