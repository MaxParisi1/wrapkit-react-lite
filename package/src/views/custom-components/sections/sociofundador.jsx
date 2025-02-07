/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img5 from '../../../assets/images/features/feature30/abogado.jpg';

const SocioFundador = () => {
    return (
        <div id="socio-fundador">
            <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <h3 className="title">Socio Fundador: Diego Parisi</h3>
                                        <h6>Abogado especializado en Litigios con más de 30 años de experiencia.</h6>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>Contacto<i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SocioFundador;