import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './about.css';

export default class About extends Component 
{
	render()
	{
		return(
			<div>
				<Image src="assets/autumn-environment-fall-589807.jpg" className="header-image" />
				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
						<Image src="assets/felipe-cavalcanti.jpg" className="about-profile-pic"/>
						<h3> Felipe Cavalcanti </h3>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
						<p>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
						<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>				
					</Col>
				</Grid>

			</div>
		)
	}
}