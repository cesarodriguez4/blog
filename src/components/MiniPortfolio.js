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
        <Typography align='left' type='button'><small><strong>+4 years of experience throughout
        projects from 0 to clients from
        <i className='text-success'> Europe</i>, <i className='text-success'>USA</i> to <i className='text-success'>latin America.</i></strong></small></Typography>
        <Typography align='left'>
          My stack it's based in:
          <li>Javascript ES7</li>
          <li>Git</li>
          <li>Ruby</li>
          <li>Java</li>
          <li>Python</li>
          <li>Php</li>
          <li>SQL, noSQL</li>
          <li>Linux</li>
        </Typography>
        <Typography>Qualified remote experience using Skype, Trello, Slack and so on.</Typography>
        <Link to='/CV'>
          <Button raised style={buttonW}>Learn more</Button>
        </Link>
      </div>
  		);
  }
}
