import React, {Component} from 'react';
import ProfileThumb from './ProfileThumb';
import Timeline from './Timeline';
import MiniPortfolio from './MiniPortfolio';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import { LinearProgress } from 'material-ui/Progress';

const URL_CARDS = `http://api.cesarjs.xyz/news`;

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
        <Grid className='p-5' container justify='center' gutter={24}>
          <Hidden smDown>
            <Grid item md={2}>
              <ProfileThumb></ProfileThumb>
            </Grid>
          </Hidden>
          <Grid item xs={3} md={7}>
          {feed}
          </Grid>
          <Hidden smDown>
            <Grid item md={2}><MiniPortfolio></MiniPortfolio></Grid>
          </Hidden>
        </Grid>
  		);
  }
}
