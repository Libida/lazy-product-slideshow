import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import ProductTile from './ProductTile';

describe('ProductTile', () => {
  const onClickMock = jest.fn();
  const initialProps = {
    title: 'product title',
    image: 'image src',
    url: 'url',
    price: 100,
    discountPrice: 50,
    currency: 'GBP',
    brand: 'Product Brand',
    handleClick: onClickMock,
  };
  const wrapper = (props) => shallow(<ProductTile {...props} />);

  test('should render correctly for default initial props', () => {
    expect(wrapper(initialProps)).toMatchSnapshot();
  });

  test('should render correctly with children', () => {
    expect(wrapper({ ...initialProps, children: <div>Children component</div> })).toMatchSnapshot();
  });

  test('should handle clicks', () => {
    const component = wrapper(initialProps);

    component.simulate('click', onClickMock);
    expect(onClickMock).toHaveBeenCalled();
  });
});
