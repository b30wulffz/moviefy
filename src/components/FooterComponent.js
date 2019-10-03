import React from 'react';
import { Container, Col, Row } from 'reactstrap'

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs="12" md="6" className="credits">
                        <p>&copy; 2019</p>
                        <p>Made by Shlok Pandey</p>
                        <p><a href="https://github.com/b30wulffz/moviefy"><b><i className="fas fa-code-branch"></i> Fork it</b></a></p>
                    </Col>
                    <Col xs="12" md="6" className="contact">
                        <h3>Contact Us:</h3>
                        <div className="contact-links">
                            <a href="https://www.facebook.com/shl0k"><i className="fab fa-facebook-square"></i> Facebook</a>
                            <a href="https://www.linkedin.com/in/shl0k/"><i className="fab fa-linkedin"></i> Linkedin</a>
                            <a href="https://twitter.com/b30wulffz"><i className="fab fa-twitter-square"></i> Twitter</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer