import HomePage from './pages/home/HomePage'
import SportsPage from './pages/sports/SportsPage'
import OddsPage from './pages/odds/OddsPage'
import LoginPage from './pages/auth/LoginPage'

export const routes = [
	{
		path: '/',
		exact: true,
		private: true,
		component: HomePage,
	},
	{
		path: '/auth/login',
		exact: true,
		private: false,
		component: LoginPage,
	},
	{
		path: '/home',
		exact: true,
		private: true,
		component: HomePage
	},
	{
		path: '/sports',
		exact: true,
		private: true,
		component: SportsPage,
	},
	{
		path: '/sports/:key/odds',
		exact: true,
		private: true,
		component: OddsPage
	}
]