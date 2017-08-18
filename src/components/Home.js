import React, {Component} from 'react';
import ProfileThumb from './ProfileThumb';
import Timeline from './Timeline';
import MiniPortfolio from './MiniPortfolio';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import { LinearProgress } from 'material-ui/Progress';

const URL_CARDS = `http://api.cesarjs.xyz/news`;
const thumbMargin = {
  marginRight: '6em',
  marginLeft: '1em',
  marginTop: '1em'
};
const mini = {
  marginLeft: '-7em',
  marginTop: '1em'
};
const feeds = {
  marginTop: '2em'
};
export default class Home extends Component {
  componentWillMount() {
    fetch(URL_CARDS)
    .then(response => {
      if (response.status !== 200) {
        console.log('Problem with the response');
        return;
      }
      response.json().then(data => {
        this.setState({cards: data.reverse()});
      });
    });
  }
  constructor(props) {
    super(props);
    this.state = {cards: null};
  }
  render() {
    let feed = null;
    if (this.state.cards !== null) {
      feed = <Timeline cards={this.state.cards}></Timeline>;
    } else {
      feed = <div><p>Loading...</p><LinearProgress/></div>;
    }
  	return (
        <Grid container justify='center' gutter={24}>
          <Hidden smDown>
            <Grid item md={2} style={thumbMargin}>
              <ProfileThumb></ProfileThumb>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={7} style={feeds}>
          {feed}
          </Grid>
          <Hidden smDown>
            <Grid item md={2} style={mini}><MiniPortfolio></MiniPortfolio></Grid>
          </Hidden>
        </Grid>
  		);
  }
}
