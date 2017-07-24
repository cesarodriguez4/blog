import React, {Component} from 'react';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

export default class Contact extends Component {
  render() {
  	return (
      <div>
        <Grid container gutter={40} justify='center'>
            <Input placeholder='Nombre'></Input>
            <Input placeholder='Email'></Input>
            <Input placeholder='Cuentame'></Input>
            <Button raised>Hire</Button>
        </Grid>
      </div>
  		);
  }
}