import React, {Component} from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const bgHeader = {
  backgroundColor: '#282e33'
};

export default class Footer extends Component {
  render() {
  	return (
      <Toolbar style={bgHeader}>
        <Typography className='text-white'>Todos los derechos reservados.</Typography>
      </Toolbar>
  		);
  }
}