import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

const bgHeader = {
  backgroundColor: '#282e33'
};

export default class Header extends React.Component {
	render() {
		return(
      <div>
        <AppBar style={bgHeader} position="static">
          <Toolbar>
            <IconButton className="text-primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography className="text-white" type="title">
              El Blog de Cesar
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
		);
	};
}