import { ListGroup, Breadcrumb } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/sportsSlice'
import SportCard from '../../components/Sports/SportCard'

export default function Sports() {
	const dispatch = useDispatch()
	const sportData = useSelector((state: any) => state.sports.data)
	let content: any
	useEffect(() => {
		dispatch(fetchAll())
	}, [])

	if (sportData.length !== 0) {
		content = sportData.data.map((sport: any) => (
			// <SportCard key={sport.key}/>
			<ListGroup.Item action variant="light" key={sport.key}>
				key: {sport.key}
				active: {sport.active}
				group: {sport.group}
				details: {sport.details}
				title: {sport.title}
			</ListGroup.Item>
		))
	}

	return(
		<div>
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item active>Sports</Breadcrumb.Item>
			</Breadcrumb>
			{content}
		</div>
	)
}