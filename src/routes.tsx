import HomePage from './pages/home/HomePage'
import SportsPage from './pages/sports/SportsPage'
import OddsPage from './pages/odds/OddsPage'
import LoginPage from './pages/auth/LoginPage'

export const routes = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/auth/login',
		exact: true,
		component: LoginPage,
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