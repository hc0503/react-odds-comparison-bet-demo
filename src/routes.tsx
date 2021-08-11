import HomePage from './pages/home/HomePage'
import SportsPage from './pages/sports/SportsPage'
import OddsPage from './pages/odds/OddsPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import SubscriptionPage from './pages/subscription/SubscriptionPage'

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
		path: '/auth/register',
		exact: true,
		private: false,
		component: RegisterPage,
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
	},
	{
		path: '/subscription',
		exact: true,
		private: true,
		component: SubscriptionPage,
	},
]