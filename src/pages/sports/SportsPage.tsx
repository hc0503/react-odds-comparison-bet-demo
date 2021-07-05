import { Breadcrumb, Container, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/reducers/sportReducer'
import SportCard from '../../components/Sports/SportCard'
import NavBar from '../../components/common/navbar'

export default function Sports() {
	const dispatch = useDispatch()
	const sportData = useSelector((state: any) => state.sport.data)
	let content: React.ReactNode = (
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
		<>
			<NavBar />
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item active>Sports</Breadcrumb.Item>
			</Breadcrumb>
			<Container>
				{content}
			</Container>
		</>
	)
}