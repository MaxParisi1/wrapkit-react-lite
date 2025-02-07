/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

const AreasDePractica = () => {
    return (
        <div id="areas-de-practica">
            <div className="spacer feature4 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Areas de Práctica</h2>
                            <h6 className="subtitle">Se listan las áreas de práctica en las que se ofrece servicio.</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Comercial</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Civil</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Aeronáutico</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Tributario</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Administrativo</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Bancario</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho Laboral</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho del Consumidor</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="wrap-feature4-box m-t-20">
                            <Card
                                body
                                className="text-center bg-light"
                            >
                                <CardBody style={{alignSelf: 'center'}}>
                                    <h5 className="font-medium">Derecho de la Competencia y Compliance</h5>
                                    <a href="#" className="linking text-themecolor">Contacto<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default AreasDePractica;
