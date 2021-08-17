import {
	Form,
	Col,
	Row
} from 'react-bootstrap';
import React, { useState } from 'react';

interface IProps {
	value: number;
}
export default function OddCalc({value}: IProps) {
	const [amount, setAmount] = useState(0);
	const handleAmountChange = (e: any) => {
		setAmount(e.target.value * value);
	}

	return (
		<Row className="mb-1">
			<Form.Label column sm={2}>
				{value}
			</Form.Label>
			<Col sm={5}>
				<Form.Control type="number" min="0" defaultValue="0" onChange={handleAmountChange} />
			</Col>
			<Form.Label column sm={5}>
				$ {amount}
			</Form.Label>
		</Row>
	);
}