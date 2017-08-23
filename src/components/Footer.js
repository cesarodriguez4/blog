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
        <Typography style={style.text}>2017 CR. You can check the source code in my github profile. #Peace </Typography>
      </Toolbar>
  		);
  }
}
