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

const style = {
  bgHeader: {
    backgroundColor: '#2d2d2d'
  },
  ldrawer: {
    width: 300
  },
  title: {
    marginTop: '2%',
    color: 'white',
    fontFamily: `'Berkshire Swash', cursive`,
    textTransform: 'none',
    fontSize: '1em'
  },
  langColor: {
    color: 'white'
  }
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
        <AppBar style={style.bgHeader} position="static">
          <Toolbar>
            <Grid container justify='flex-start'>
              <Hidden only={['lg', 'md']}>
                <IconButton aria-label="Menu" onClick={this.handleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Typography type="title">
                  <Link to="/"><Button style={style.title}>Cesarjs.xyz</Button></Link>
              </Typography>
            </Grid>
            <Grid container justify='flex-end'>
              <Button style={style.bgHeader} 
                onClick={this.handleClick}>
                  <i style={style.langColor} className='fa fa-language fa-2x'></i>
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
            <div style={style.ldrawer}>
              <ProfileThumb></ProfileThumb>
            </div>
          </Drawer>
        </AppBar>
      </div>
		);
	};
}
