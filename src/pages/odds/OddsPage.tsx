import { useEffect, useState } from 'react'
import { Breadcrumb, Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { fetchAll } from '../../services/OddService'
import OddCard from '../../components/Odds/OddCard'
import OddModal from '../../components/Odds/OddModal'
import NavBar from '../../components/common/navbar'

export default function Odds(props: any) {
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
	const [oddData, setOddData] = useState<any>()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetchAll(initParam)
			.then((res: any) => {
				setIsLoading(false)
				setOddData(res)
			})
			.catch((error: any) => {
				setIsLoading(false)
				setOddData(error.response.data)
			})
	}, [])

	return(
		<>
			<NavBar />
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/sports' }}>Sports</Breadcrumb.Item>
				<Breadcrumb.Item active>Odds</Breadcrumb.Item>
			</Breadcrumb>
			<Container>
				{isLoading && (
					<div className='align-center'>
						<Spinner animation='border'>
							<span className='sr-only'>Loading...</span>
						</Spinner>
					</div>
				)}
				{!isLoading && !oddData?.success && (
					<div className='align-center'>{oddData?.msg}</div>
				)}
				{!isLoading && oddData?.data?.map((odd: IoddAction) => (
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
				))}
			</Container>
			<OddModal
				show={modalShow}
				setModalShow={() => setModalShow(false)}
				data={modalData}
				/>
		</>
	)
}