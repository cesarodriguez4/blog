import React, { Component } from 'react';
import { Button, Typography } from 'material-ui';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';

const imgUrl = `foto_400x400.jpg`;
const styles = {
  imgStyle: {
    width: '80%',
    borderRadius: '50%',
    marginLeft: '10%',
    marginTop: '1em'
  },
  btnContact: {
    width: '100%'
  },
  links: {
    color: '#8a91a0'
  }
}

export default class ProfileThumb extends Component {
  render() {
  	return (
      <div>
      	<img alt="Cesar Jr Rodriguez" src={imgUrl} style={styles.imgStyle}></img>
      	<Typography className='mt-2 mb-2' align='center' type='title'>
          <strong>Cesar Jr Rodriguez</strong></Typography>
      	<Typography align='center' type='caption'>Software Engineer</Typography>
        <Typography align='center' type='caption'>
          Engineering Student at <strong>Universidad de Carabobo</strong>
        </Typography>
        <Grid container spacing={16} justify="center">
          <Grid item>
            <Button>
              <a style={styles.links} href='https://www.google.com'><i className="fa fa-google fa-2x"></i></a>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <a style={styles.links} href='https://www.facebook.com/cesarodriguez4'><i className="fa fa-facebook fa-2x"></i></a>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <a style={styles.links} href='https://twitter.com/cesarnode'><i className="fa fa-twitter fa-2x"></i></a>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <a style={styles.links} href='https://stackoverflow.com/users/4826848/cesar-jr-rodriguez'><i className="fa fa-stack-overflow fa-2x"></i></a>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <a style={styles.links} href='https://www.linkedin.com/in/cesar-jr-rodriguez-b4152a127/'><i className="fa fa-linkedin fa-2x"></i></a>
            </Button>
          </Grid>
          <Grid item>
            <Button><a style={styles.links} href='https://github.com/cesarodriguez4'><i className="fa fa-github fa-2x"></i></a></Button>
          </Grid>
        </Grid>
        <Typography type='subheading' align='center'>Current:</Typography>
        <Typography align='center'>Software Engineer
          @ <strong><a href={'https://bitlat.com'}>BITLAT</a></strong>
          </Typography>
        <Link to="/contact">
          <Button style={styles.btnContact} raised>Contact me</Button>
        </Link>
      </div>
  		);
  }
}
