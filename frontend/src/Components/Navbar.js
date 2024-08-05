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
              <NavDropdown.Item href="/projects/games">Games</NavDropdown.Item>
              <NavDropdown.Item href="/projects/web">
                Web Applications
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/datascience">Data Science Projects</NavDropdown.Item>
              <NavDropdown.Item href="/projects/RPA">RPA Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/">
                All
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contactme">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;