import React, { Component } from 'react';
import Markdown from 'react-markdown';
import { Row, Col } from 'reactstrap';


const md = `# Studying Javascript Classes

Mi nombre es \`Cesar\``;

export default class Doc extends Component {
  render() {
  	return (
  	  <Row>
        <Col md={2}>
         {/* Aca pueden ir articulos recomendados*/}
        </Col>
        <Col md={8}>
          <Markdown source={md}/>
        </Col>
        <Col md={2}>
         {/* Aca va publicidad*/}
        </Col>
      </Row>
  		);
  }
}