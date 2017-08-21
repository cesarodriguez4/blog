import React, {Component} from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const style = {
  card: {
    width: 500,
    marginTop: 100,
    marginBottom: 100
  }
}

export default class Contact extends Component {
  render() {
  	return (
      <div>
        <Grid container justify="center">
          <Grid item>
            <Card style={style.card}>
              <CardContent>
                <Typography align="center" type="headline">Send me</Typography>
                <TextField label="Your Name" fullWidth/>
                <TextField label="Your Email" fullWidth/>
                <TextField label="Your Message" fullWidth multiline/>
              </CardContent>
              <CardActions>
                <Grid container justify="center">
                  <Button>Send Email</Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
  		);
  }
}
