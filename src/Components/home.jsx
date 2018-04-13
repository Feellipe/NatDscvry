import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid,Row, Col, Image, Button} from 'react-bootstrap';
import './home.css';

export default class Home extends Component 
{
	render()
	{
		return(
			<Grid>
				<Jumbotron>
					<h2> Welcome to the DiscoLoco</h2>
				<Link to="/about">
					<Button bsStyle="primary">About</Button>
				</Link>
				</Jumbotron>
				<Row className='show-grid text-center'>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/man-field.jpg" circle className="profile-pic" />
						<h3>
							What is Lorem Ipsum?
						</h3>
						<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
						<p>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
						<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/man-field.jpg" circle className="profile-pic" />
						<h3>
							What is Lorem Ipsum?
						</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/man-field.jpg" circle className="profile-pic" />
						<h3>
							What is Lorem Ipsum?
						</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</Col>
				</Row>

			</Grid>
		)
	}
}