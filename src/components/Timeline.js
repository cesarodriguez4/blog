import React, { Component } from 'react';
import { Card, Typography, CardMedia } from 'material-ui';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const imgs = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`;
const styleImg = {
	width: '100%',
	height: '15em'	
};
export default class Timeline extends Component {
  render() {
  	return (
      <div>
        <Row>
          <Col md={12}>
            <Card className="col-lg-9 container mb-3">
              <Link to="/docs">
                <Typography component="p">11 de Julio de 2017</Typography>    
                <CardMedia>
                  <img style={styleImg} src={imgs} alt="Contemplative Reptile" />
                </CardMedia>
                <Typography type="headline" component="h2">How to use React!</Typography>
                <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with th...
                </Typography>
              </Link>
            </Card>
          </Col>
          <Col md={12}>
            <Card className="col-lg-9 container mb-3">
              <Link to="/docs">
                <Typography component="p">11 de Julio de 2017</Typography>    
                <CardMedia>
                  <img style={styleImg} src={imgs} alt="Contemplative Reptile" />
                </CardMedia>
                <Typography type="headline" component="h2">How to use React!</Typography>
                <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with th...
                </Typography>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
  		);
  }
}