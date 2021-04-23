import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap'


export default function SportsPage() {
		const sports: any = {
			"data": [
				{
					"key": "americanfootball_ncaaf",
					"active": true,
					"group": "American Football",
					"details": "US College Football",
					"title": "NCAAF"
				 },
				 {
					"key": "americanfootball_nfl",
					"active": true,
					"group": "American Football",
					"details": "US Football",
					"title": "NFL"
				 },
			]
		};

		return(
			<ListGroup>
				{sports.data.map((sport: any) => (
					<ListGroup.Item action variant="light">
						{sport.title}
					</ListGroup.Item>
				))}
			</ListGroup>
		);
}