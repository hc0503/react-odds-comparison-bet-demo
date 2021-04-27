import { ListGroup, Breadcrumb, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/oddsSlice'
import OddCard from '../../components/Odds/OddCard'

export default function Odds(props: any) {
	const dispatch = useDispatch()
	const oddData = useSelector((state: any) => state.odds.data)
	let content: any
	const initParam: IoddParam = {
		sport_key: 'soccer_epl',
		region: 'uk',
		mkt: 'h2h'
	}
	
	useEffect(() => {
		dispatch(fetchAll(initParam))
	}, [])

	if (oddData.length !== 0) {
		content = oddData.data.map((odd: IoddAction) => (
			<OddCard
				key={odd.id}
				id={odd.id}
				sport_nice={odd.sport_nice}
				teams={odd.teams}
				home_team={odd.home_team}
				commerce_time={odd.commence_time}
				/>
		))
	}

	return(
		<div>
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/sports' }}>Sports</Breadcrumb.Item>
				<Breadcrumb.Item active>Odds</Breadcrumb.Item>
			</Breadcrumb>
			<Container>
				{content}
			</Container>
		</div>
	)
}