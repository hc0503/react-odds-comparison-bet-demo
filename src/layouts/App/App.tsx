import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { routes } from '../../routes'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, key) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
              key={key}
              />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App
