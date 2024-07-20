import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Bio</Nav.Link>
            <Nav.Link href="/blogs">Blog</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Web Applications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Data Science Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">RPA Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="projects">
                All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;