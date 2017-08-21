import React, {Component} from 'react';
import { Typography, Button } from 'material-ui';
import { Link } from 'react-router-dom';

const buttonW = {
  width: '100%'
};

export default class MiniPortfolio extends Component {
  render() {
  	return (
      <div>
        <Typography align='left' type='button'><small><strong>+3 years of laboral experience building
        projects from 0 to clients from
        <i className='text-success'> Europe</i>, <i className='text-success'>USA</i> to <i className='text-success'>latin America.</i></strong></small></Typography>
        <Typography align='left'>
          My stack it's based in:
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
        <Typography>I love to do this
        and also I've worked with remote teams using Skype, Slack y Trello.</Typography>
        <Link to='/CV'>
          <Button raised style={buttonW}>Learn more</Button>
        </Link>
      </div>
  		);
  }
}
