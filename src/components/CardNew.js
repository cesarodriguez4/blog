import React, {
  Component
} from 'react';
import {
  Typography,
  CardMedia
} from 'material-ui';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router-dom';

const gridCard = {
  marginBottom: '2em',
  cursor: 'pointer',
  transition: '100ms linear all',
  textDecoration: 'none'
};
const imgStyle = {
  width: '100%',
  padding: '1em'
};

const chip = {
  float: 'right'
}

function format(string) {
  return string.trim().replace(' ', '-').toLowerCase();
}

export default class CardNew extends Component {
  render() {
    const date = new Date(this.props.info.date);
    const DATE = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const imgs = this.props.info.cover;
    return (
      <Link to={`/docs/${this.props.info._id}/${format(this.props.info.title)}`}>
      <Grid container direction = 'column' justify = 'center' gutter = { 40 } >
      <Grid className='cardnew' style = { gridCard } item md = {9} >
      <Chip label = {DATE}
      style = {chip}/>
      <CardMedia>
      <img style = {imgStyle }
      height = {
        200
      }
      src = {
        imgs
      }
      alt = {
        this.props.info.title
      }
      /> <
      /CardMedia> <
      div className = 'p-3' >
      <
      Typography type = "display1"
      component = "h2" > {
        this.props.info.title
      } <
      /Typography> <
      Typography type = "subheading"
      component = "h2" > {
        this.props.info.content.substring(0, 100)
      }... <
      /Typography> <
      /div> <
      /Grid> <
      /Grid>
      </Link>
    );
  }
}
