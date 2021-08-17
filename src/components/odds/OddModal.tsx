import { Modal,
	Button,
	Form,
	Col,
} from 'react-bootstrap'
import OddCalc from './OddCalc';

export default function OddModal(props: any) {
	let body: any

	if (props.data.sites !== null) {
		body = props.data.sites.map((site: any) => (
			<>
				<Form.Group as={Col} className="mb-5">
					<Form.Label className="font-weight-bold">{site.site_nice}</Form.Label>
					{site.odds.h2h.map((value: number) => (
						<OddCalc value={value} />
					))}
				</Form.Group>
			</>
		));
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
				{body}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.setModalShow}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
} 