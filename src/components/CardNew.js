import React, {Component} from 'react';
import { Card, Typography, CardMedia } from 'material-ui';
// import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
const gridCard = {
  marginLeft:'6em'
};
const imgStyle = {
  width: '100%',
  padding: '1em'
};
const p1 = {
  padding: '1em',
  color: 'green'
};
const imgs = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`;
export default class CardNew extends Component {
  render() {
  	return (
     <Grid container direction='column' justify='center' gutter={40}>
      <Grid style={gridCard} item md={9}>
        <Card>
            <Typography style={p1} align='right' component="p">11 de Julio de 2017</Typography>    
            <CardMedia>
              <img style={imgStyle} height={200} src={imgs} alt="Contemplative Reptile" />
            </CardMedia>
            <div className='p-3'>
              <Typography type="display1" component="h2">How to use React!</Typography>
              <Typography type="subheading" component="h2">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with th...
              </Typography>
            </div>
        </Card>
      </Grid>
    </Grid>
   );
  }
}