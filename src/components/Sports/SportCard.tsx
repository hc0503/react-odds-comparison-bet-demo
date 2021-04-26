import { Card } from 'react-bootstrap'

interface sportData {
	group: string,
	details: string,
	title: string
}

export default function SportCard(props: sportData) {
	return(
		<Card className='mb-3'>
			<Card.Header as="h5">{props.group}</Card.Header>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.details}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}