import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

const bgHeader = {
  backgroundColor: 'white'
};

export default class Header extends React.Component {
	render() {
		return(
      <div>
        <AppBar style={bgHeader} position="static">
          <Toolbar>
            <IconButton aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title">
              CesarJS | Blog
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
		);
	};
}