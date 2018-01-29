import React, {Component} from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const style = {
  bgHeader: {
    backgroundColor: '#2d2d2d'
  },
  text: {
    color: 'white'
  }
}

export default class Footer extends Component {
  render() {
  	return (
      <Toolbar style={style.bgHeader}>
        <Typography style={style.text}>"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more." </Typography>
      </Toolbar>
  		);
  }
}
