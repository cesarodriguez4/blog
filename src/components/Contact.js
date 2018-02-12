import React, {Component} from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const style = {
  card: {
    marginTop: '10%',
    marginBottom: '35%'
  },
  background: {
    backgroundColor: '#c9bfca'
  },
  errorDisplay: {
    backgroundColor: '#ff6194',
    display: 'flex',
    textAlign: 'center',
    color: 'white'
  },
  successDisplay: {
    backgroundColor: 'rgb(121, 255, 97)',
    display: 'flex',
    textAlign: 'center',
    color: 'white'
  }
}

function isEmail(e) {
  return true;
}

const URL_EMAIL = 'http://api.cesarjs.xyz/contact';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      success: ''
    };
    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (isEmail) {
    fetch(URL_EMAIL, {
      method: 'POST',
      body: {name, email, message}
    }).then(result => {
      console.log(result);
      this.setState({success: 'Email has been send'});
    }).catch(error=>{
      this.setState({error: `An error ocurred: ${error}`});
    });
    } else {
      this.setState({error: 'Not a valid email'});
    }
  }
  render() {
  	return (
      <div style={style.background}>
        <Grid container justify="center">
          <Grid item>
            <Card style={style.card}>
              <CardContent>
                <Typography align="center" type="headline">Do you think I'm useful for your website/business?</Typography>
                <TextField id='name' label="Your Name" fullWidth/>
                <TextField id='email' label="Your Email" fullWidth/>
                <TextField id='message' label="Your Message" fullWidth multiline/>
              </CardContent>
              <CardActions>
                <Grid container justify="center">
                  <Button onClick={this.sendEmail}>Send Email</Button>
                </Grid>
              </CardActions>
              <span style={style.errorDisplay}>{this.state.error}</span>
              <span style={style.successDisplay}>{this.state.success}</span>
            </Card>
          </Grid>
        </Grid>
      </div>
  		);
  }
}
