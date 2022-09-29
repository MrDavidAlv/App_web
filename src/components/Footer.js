import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import logoFooter from "./../assets/img/logo.png";
import './../assets/css/Footer.css'

const Footer = () => {
    return (
        <>
            <Container fluid >
                <Row className="justify-content-between align-items-center contFooter p-3">
                    <Col className="col-12 col-md-3">
                        <img className="logoFooter" src={logoFooter} />
                    </Col>
                    <Col className="col-12 col-md-7">
                        <Row className="justify-content-center">
                            <Col className="col-12 col-md-auto">
                                <p className="linkTerminos">
                                    Políticas de tratamiento de datos
                                </p>
                            </Col>
                            <Col className="col-12 col-md-auto">
                                <a className="linkTerminos" href="#">
                                    <p>
                                        Términos y Condiciones
                                    </p>
                                </a>
                            </Col>
                            <Col className="col-12 col-md-7">
                                <a href="#">
                                    <img src={"./../assets/img/icon-facebook.png"}></img>
                                </a>&nbsp;&nbsp;
                                <a href="#">
                                    <img src={"./../assets/img/icon-twitter.png"}></img>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;