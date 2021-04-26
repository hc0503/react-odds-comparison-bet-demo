import Home from './pages/Home/Home'
import Sports from './pages/Sports/Sports'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/home',
		exact: true,
		component: Home
	},
	{
		path: '/sports',
		exact: true,
		component: Sports
	}
]