import HomePage from './pages/HomePage/HomePage'
import SportsPage from './pages/SportsPage/SportsPage'
import OddsPage from './pages/OddsPage/OddsPage'

export const routes = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/home',
		exact: true,
		component: HomePage
	},
	{
		path: '/sports',
		exact: true,
		component: SportsPage,
	},
	{
		path: '/sports/:key/odds',
		exact: true,
		component: OddsPage
	}
]