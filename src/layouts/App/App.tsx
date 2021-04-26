import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'

import './App.css';
import { routes } from '../../routes'

function App() {
  console.log(routes[0].component)
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        >
        <Navbar.Brand href="/">Comparison</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
