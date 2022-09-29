import React from "react";
import "../Assets/Css/Carrusel.css";
import { Col, Container, Row, } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
    return (
        <>
            <Container fluid className="contCarrusel">
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 slide1"
                                    alt=""
                                />
                                <div className="contCaption">
                                    <h3 className="titSlides">
                                        GARANTÍA
                                        <br />
                                        EXTENDIDA
                                    </h3>
                                    <p className="txtSlides">
                                        Protege tus electrodomésticos
                                        <br />
                                        por más tiempo
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 slide2"
                                    alt=""
                                />
                                <div className="contCaption">
                                    <h3 className="titSlides">
                                        DAÑO
                                        <br />
                                        ACCIDENTAL
                                    </h3>
                                    <p className="txtSlides">
                                        Protege tu inversión
                                        <br />
                                        por más tiempo
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 slide3"
                                    alt=""
                                />
                                <div className="contCaption">
                                    <h3 className="titSlides">
                                        HURTO
                                        <br />
                                        CALIFICADO
                                    </h3>
                                    <p className="txtSlides">
                                        Duerme tranquilo sabiendo
                                        <br />
                                        que tu casa está asegurada
                                    </p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Carrusel;