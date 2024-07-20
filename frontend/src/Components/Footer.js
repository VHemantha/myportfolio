import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-3">
      <Container fluid className='bg-dark text-white'>
        <Row className="py-3">
          <Col className="text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col className="text-center">
            <small>© {currentYear} Viraj Hemantha. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;