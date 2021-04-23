
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import { Article } from './pages/Article/Article';

export default function Routes() {
	return (
      <Switch>
			<Route path='/home' component={Home} />
			<Route path='/articles' component={Article} />
      </Switch>
	);
}