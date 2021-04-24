
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Sports from './pages/Sports/Sports'

export default function Routes() {
	return (
      <Switch>
			<Route path='/home' component={Home} />
			<Route path='/sports' component={Sports} />
      </Switch>
	);
}