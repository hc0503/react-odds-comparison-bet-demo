import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SportCard(props: IsportCard) {
	return(
		<Card className='mb-3' key={props.sport_key}>
			<Card.Header as="h5">{props.group}</Card.Header>
			<Card.Body>
				<Card.Title>
					<Link to={`/sports/${props.sport_key}/odds`} className='navbar-brand navbar-dark'>{props.title}</Link>
				</Card.Title>
				<Card.Text>
					{props.details}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}