import React, { useEffect, useState } from 'react'
import { ListGroup, Breadcrumb, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/oddsSlice'
import OddCard from '../../components/Odds/OddCard'
import OddModal from '../../components/Odds/OddModal'

export default function Odds(props: any) {
	const dispatch = useDispatch()
	const oddData = useSelector((state: any) => state.odds.data)
	let content: any
	let region: string = 'uk'
	let mkt: string = 'spreads'
	const sport_key: string = props.match.params.key
	const initParam: IoddParam = {
		sport_key: sport_key,
		region: region,
		mkt: mkt
	}
	const [modalShow, setModalShow] = useState(false)
	const [modalData, setModalData] = useState({
		teams: null,
		sites: null
	})

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
				sites={odd.sites}
				setModalData={() => {
					setModalData({
						teams: odd.teams,
						sites: odd.sites
					})
					setModalShow(true)
				}}
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
			<OddModal
				show={modalShow}
				setModalShow={() => setModalShow(false)}
				data={modalData}
				/>
		</div>
	)
}