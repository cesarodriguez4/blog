import React, {Component} from 'react';
import { Typography, Button } from 'material-ui';

export default class MiniPortfolio extends Component {
  render() {
  	return (
      <div>
        <Typography align='left' type='button'><small><strong>+3 años de experiencia 
        laboral creando proyectos desde 0 a clientes 
        en <i className='text-success'>Europa</i>, <i className='text-success'>USA</i> y <i className='text-success'>latinoamérica</i></strong></small></Typography>
        <Typography align='left'>
          Mi stack esta basado en:
          <li>ReactJs</li>
          <li>AngularJs</li>
          <li>Redux</li>
          <li>Git</li>
          <li>Ruby on Rails</li>
          <li>Java</li>
          <li>Node</li>
          <li>SQL, noSQL</li>
          <li>Linux</li> 
          <li>UI/UX</li>
        </Typography>
        <Typography>Me gusta lo que hago 
        y he trabajado en equipos remotos usando Skype, Slack y Trello</Typography>
        <Button>Saber más</Button>
      </div>
  		);
  }
}