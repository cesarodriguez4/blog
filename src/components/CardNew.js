import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

function format(string) {
  return string.trim().replace(' ', '-').toLowerCase();
}

const styles = {
  card: {
    maxWidth: 600,
    overflow: 'hidden',
    padding: '2em',
    boxSizing: 'border-box',
    backgroundColor: '#c9bfca'
  },
  media: {
    height: 180
  },
  chip: {
    float: 'right'
  }
}
export default class CardNew extends Component {
  render() {
    const date = new Date(this.props.info.date);
    const DATE = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    const imgs = this.props.info.cover;
    return (
      <Link to={`/docs/${this.props.info._id}/${format(this.props.info.title)}`}>
        <Card style={styles.card}>
          <Chip style={styles.chip} label={DATE}/>
          <img style={styles.media} src={imgs} alt={this.props.title}/>
          <CardContent>
            <Typography type="headline" component="h2">
              {this.props.info.title}
            </Typography>
            <Typography type="caption" component="p">
              {this.props.info.content.substring(0, 100)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}
