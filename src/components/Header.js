import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return(
		<Navbar>
          <Navbar .Header>
            <Navbar.Brand>
              <a>CesarJs | Blog</a>
            </Navbar.Brand>
            <Nav>
            	<NavItem><Link to="/">Inicio</Link></NavItem>
            	<NavItem><Link to="/code">Programación</Link></NavItem>
            	<NavItem><Link to="/world">Política</Link></NavItem>
              <NavItem><Link to="/about">Acerca de mi</Link></NavItem>
            </Nav>
          </Navbar .Header>
        </Navbar>
		);
	};
}