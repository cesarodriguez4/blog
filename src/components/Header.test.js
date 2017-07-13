import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { MuiThemeProvider } from 'material-ui/styles';

it('render the AppBar correctly', () => {
  const head = renderer.create(
  	<MuiThemeProvider><Header></Header></MuiThemeProvider>).toJSON();
  expect(head).toMatchSnapshot();
});