import React, {Component} from 'react';
import ProfileThumb from './ProfileThumb';
import Timeline from './Timeline';
import MiniPortfolio from './MiniPortfolio';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

export default class Home extends Component {
  render() {
  	return (
        <Grid className='p-5' container justify='center' gutter={24}>
          <Hidden smDown>
            <Grid item md={2}>
              <ProfileThumb></ProfileThumb>
            </Grid>
          </Hidden>
          <Grid item xs={3} md={7}>
            <Timeline></Timeline>
          </Grid>
          <Hidden smDown>
            <Grid item md={2}><MiniPortfolio></MiniPortfolio></Grid>
          </Hidden>
        </Grid>
  		);
  }
}
