import { ListGroup, Breadcrumb } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../redux/sportsSlice'
import SportCard from '../../components/Sports/SportCard'
import envConfig from '../../config/environments'

export default function Sports() {
	console.log(envConfig.apiKey)
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
				<Breadcrumb.Item><Link to={"/home"}>Home</Link></Breadcrumb.Item>
				<Breadcrumb.Item active>Sports</Breadcrumb.Item>
			</Breadcrumb>
			<ListGroup>
				{content}
			</ListGroup>
		</div>
	)
}