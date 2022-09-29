import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Swal from "sweetalert2"
import './../assets/css/Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const [loginValues, setLoginValues] = useState({ usuario: "", contrasena: "" })
    const { usuario, contrasena } = loginValues;

    const handleActualizarInputs = ({ target }) => {
        setLoginValues({
            ...loginValues,
            [target.name]: target.value,
        })
    }



    return (
        <>
            <Header />
            <Container fluid>
                <Row className="justify-content-center align-content-center contLogin">
                    <Col className="col-12">
                        {/* <h1 className="titLogin">
                            s
                        </h1> */}
                        {/* <p className="txtLogin">
                            Buscar
                        </p> */}
                        <input type="text"
                            placeholder="Buscar por nombre"
                        />
                    </Col>
                    <Col className="card cardLogin col-8 col-md-8 col-lg-8">
                        <p className="titCardLogin">
                            Premiamos tu Esfuerzo
                        </p>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
