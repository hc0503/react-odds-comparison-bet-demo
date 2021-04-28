import * as React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function OddCard(props: any) {

	return(
		<Card className='mb-3' key={props.id}>
			<Card.Header as="h5">{props.sport_nice}</Card.Header>
			<Card.Body>
				<Card.Title>
					<Link to='#' onClick={() => props.setModalShow(true)} className='navbar-brand navbar-dark'>{props.teams[0]} vs {props.teams[1]}</Link>
				</Card.Title>
				<Card.Text>
					Home team: {props.home_team}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}