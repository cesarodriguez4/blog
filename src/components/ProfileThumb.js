import React, { Component } from 'react';
import { Button, Typography } from 'material-ui';
import { Link } from 'react-router-dom';

const imgUrl = `https://pbs.twimg.com/profile_images/818531326970265601/AVd-m6Cd_400x400.jpg`;
const imgStyle = {
  width: '100%',
  borderRadius: '50%'
};
export default class ProfileThumb extends Component {
  render() {
  	return (
      <div>
      	<img alt="Cesar Jr Rodriguez" src={imgUrl} style={imgStyle}></img>
      	<Typography className='mt-2 mb-2' align='center' type='title'><strong>Cesar Jr Rodriguez</strong></Typography>
      	<Typography align='center' type='caption'>Desarrollador de Software</Typography>
        <Typography align='center' type='caption'>Estudiante de Ingeniería Civil en <strong>Universidad de Carabobo</strong></Typography>
      	  <Button><a href='https://www.google.com'><i className="fa fa-google fa-2x"></i></a></Button>
      	  <Button><a href='https://www.facebook.com/cesarodriguez4'><i className="fa fa-facebook fa-2x"></i></a></Button>
      	  <Button><a href='https://twitter.com/cesarnode'><i className="fa fa-twitter fa-2x"></i></a></Button>
          <Button><a href='https://stackoverflow.com/users/4826848/cesar-jr-rodriguez'><i className="fa fa-stack-overflow fa-2x"></i></a></Button>
          <Button><a href='https://www.linkedin.com/in/cesar-jr-rodriguez-b4152a127/'><i className="fa fa-linkedin fa-2x"></i></a></Button>
          <Button><a href='https://github.com/cesarodriguez4'><i className="fa fa-github fa-2x"></i></a></Button>
        <Typography type='subheading' align='center'>Actualmente:</Typography>
        <Typography align='center'>Programador Web
          en <strong>ISMCenter</strong>
          </Typography>
        <Link to="/contact">
          <Button className='container mt-2 bg-primary text-white' raised>Contratarme</Button>
        </Link>
      </div>

  		);
  }
}