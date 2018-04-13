import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './customNavBar.css'


export default class customNavBar extends Component{
	render(){
		return(
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Image src="assets/Logo_Blue.jpg" circle className="profile-pic" />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} componentClass={Link}  to="/" href="/" >
							Home
						</NavItem>
						<NavItem eventKey={2} componentClass={Link}  to="/about" href="/about" >
							About
						</NavItem>
						<NavItem eventKey={3} componentClass={Link}  to="/news" href="/news">
							News
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}