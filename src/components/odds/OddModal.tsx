import { Modal,
	Button,
	Form,
	Col,
	Row
} from 'react-bootstrap'

export default function OddModal(props: any) {
	let body: any

	if (props.data.sites !== null) {
		body = props.data.sites.map((site: any) => (
			<Form.Group as={Row} controlId={site.site_key} key={site.site_key}>
				<Form.Label column sm={6}>
					{site.site_nice}: {
						site.odds.spreads.odds.map((odd: any) => (
							odd + '\t'
						))
					}
				</Form.Label>
				<Col sm={6}>
					<Form.Control type='' placeholder='' />
				</Col>
			</Form.Group>
		))
	}
	
	return(
		<Modal
			show={props.show}
			onHide={props.setModalShow}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.data.teams !== null ? props.data.teams[0] +' vs ' +props.data.teams[1] : ''}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					{body}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.setModalShow}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
} 