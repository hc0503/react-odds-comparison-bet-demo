import { ListGroup } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../../redux/sportsSlice'

export default function Sports() {
	const dispatch = useDispatch()
	const sportData = useSelector((state: any) => state.sports.data)
	let content
	useEffect(() => {
		dispatch(fetchAll())
	}, [])

	if (sportData.length !== 0) {
		content = sportData.data.map((sport: any) => (
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
		<ListGroup>
			{content}
		</ListGroup>
	)
}