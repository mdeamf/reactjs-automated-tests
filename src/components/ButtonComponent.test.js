// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './ButtonComponent';

test('Button changes when clicked', () => {
  const {act} = renderer;
  const component = renderer.create(<Button title="My snapshot button!" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onClick();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onClick();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
