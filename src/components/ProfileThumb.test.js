import React from 'react';
import ProfileThumb from './ProfileThumb';
import renderer from 'react-test-renderer';
import { MuiThemeProvider } from 'material-ui/styles';

it('render the profile area successfully', () => {
  const profile = renderer.create(
  	<MuiThemeProvider><ProfileThumb></ProfileThumb></MuiThemeProvider>).toJSON();
  expect(profile).toMatchSnapshot();
});