import { Breadcrumb, Container, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/sportsSlice'
import SportCard from '../../components/Sports/SportCard'
import '../../layouts/App/App.css'

export default function Sports() {
	const dispatch = useDispatch()
	const sportData = useSelector((state: any) => state.sports.data)
	let content: any = (
		<div className='align-center'>
			<Spinner animation='border'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</div>
	)

	useEffect(() => {
		dispatch(fetchAll())
	}, [])

	if (sportData.length !== 0) {
		content = sportData.data.map((sport: IsportAction) => (
			<SportCard
				sport_key={sport.key}
				group={sport.group}
				title={sport.title}
				details={sport.details}
				key={sport.key}
				/>
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
			<Container>
				{content}
			</Container>
		</div>
	)
}