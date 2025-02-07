/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="b-t mini-top-spacer bg-black text-center py-4">
            <Container className="text-white">
                <Row className="align-items-center">
                    <Col lg="4" md="6">
                        <h5 className="text-white"><FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección</h5>
                        <p style={{ maxWidth: '300px', margin: '0 auto'}} className='mobile-mb-5'>Peña 2173, C1113 Cdad. Autónoma de Buenos Aires</p>
                    </Col>
                    <Col lg="4" md="6">
                        <h5 className="text-white"><FontAwesomeIcon icon={faPhoneAlt} /> Teléfono</h5>
                        <p>Celular: <a href="tel:+5491150071531" className="custom-link text-white">+5491150071531</a></p>
                    </Col>
                    <Col lg="4" md="6">
                        <h5 className="text-white"><FontAwesomeIcon icon={faEnvelope} /> Email</h5>
                        <p><a href="mailto:estudioparisiabogados@hotmail.com" className="custom-link text-white">estudioparisiabogados@hotmail.com</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;