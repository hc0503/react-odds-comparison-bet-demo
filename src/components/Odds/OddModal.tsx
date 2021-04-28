import { Modal,
	Button,
	Form,
	Col,
	Row
} from 'react-bootstrap'

export default function OddModal(props: any) {
	return(
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{/* {props.teams[0]} vs {props.teams[1]} */}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* {props.sites.map((site: IoddSite) => {
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							{site.site_nice}
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="email" placeholder="Email" />
						</Col>
					</Form.Group>
				})} */}
			</Modal.Body>
			<Modal.Footer>
				<Button>Close</Button>
			</Modal.Footer>
		</Modal>
	)
} 