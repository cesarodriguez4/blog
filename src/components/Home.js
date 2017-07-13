import React, {Component} from 'react';
import ProfileThumb from './ProfileThumb';
import Timeline from './Timeline';
import MiniPortfolio from './MiniPortfolio';
import {Col, Row} from 'reactstrap';

export default class Home extends Component {
  render() {
  	return (
      <Row>
        <Col md={2}>
          <ProfileThumb></ProfileThumb>
        </Col>
        <Col md={8}>
          <Timeline></Timeline>
        </Col>
        <Col md={2}><MiniPortfolio></MiniPortfolio></Col>
      </Row>
  		);
  }
}
