import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./navbar.css"

export default function NavBar() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			sticky="top"
		>
			<Navbar.Brand href="/"><img src="/logo.png" height="40" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/home">Home</Nav.Link>
					<Nav.Link as={Link} to="/sports">Sports</Nav.Link>
					<Nav.Link as={Link} to="/subscription">Subscription</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown title={<img className="rounded-circle" src="/images/default-user.png" alt="User Avatar" height={30} />} id="collasible-nav-dropdown">
						<NavDropdown.Item href="">Logout</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}