import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './news.css';

export default class News extends Component 
{
	render()
	{
		return(
			<div>
			<Image src="assets/women-business-flowers.jpg" className="news-header-image" />
			<Grid>
				
				<Row className="news-row" >
				<Col xs={12} sm={8} className="main-section">
				<h2>News</h2>
				<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				<p>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
				<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				<p>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
				<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</Col>
				<Col xs={12} sm={4} className="sidebar-section">
					<Image src="assets/berry-blue-blueberries.jpg" />
					<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
					<p>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
					<p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</Col>
				</Row>


			</Grid>	

			</div>
		)
	}
}