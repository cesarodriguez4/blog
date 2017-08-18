import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import ProfileThumb from './ProfileThumb';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import Hidden from 'material-ui/Hidden';

const bgHeader = {
  backgroundColor: '#0275d8'
};

const ldrawer = {
  width: 300
};

const title = {
  marginTop: '2%',
  color: 'white',
  fontFamily: `'Berkshire Swash', cursive`,
  textTransform: 'none',
  fontSize: '1em'
}

export default class Header extends React.Component {
  state = {
    open: false,
    ancla: undefined,
    LeftDrawer: false
  };
  handleCloseMenu = lang => {
    this.setState({open: false});
  }
  handleClick = event => {
    this.setState({
      open: true,
      ancla: event.currentTarget
    });
  }
  handleDrawer = () => {
    this.setState({
      LeftDrawer: true
    });
  }
  handleLeftClose = () => {
    this.setState({
      LeftDrawer: false
    });
  }
	render() {
		return(
      <div>
        <AppBar style={bgHeader} position="static">
          <Toolbar>
            <Grid container justify='flex-start'>
              <Hidden only={['lg', 'md']}>
                <IconButton aria-label="Menu" onClick={this.handleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Typography type="title">
                  <Link to="/"><Button style={title}>Cesarjs.xyz</Button></Link>
              </Typography>
            </Grid>
            <Grid container justify='flex-end'>
              <Button raised
                color='primary'
                onClick={this.handleClick}>
                  <i className='fa fa-language fa-2x'></i>
                </Button>
            </Grid>
            <Menu
              id='lang'
              anchorEl={this.state.ancla}
              open={this.state.open}>
              <MenuItem onClick={this.handleCloseMenu}>Español</MenuItem>
              <MenuItem onClick={this.handleCloseMenu}>English</MenuItem>
            </Menu>
          </Toolbar>
          <Drawer open={this.state.LeftDrawer} onRequestClose={this.handleLeftClose}>
            <div style={ldrawer}>
              <ProfileThumb></ProfileThumb>
            </div>
          </Drawer>
        </AppBar>
      </div>
		);
	};
}
