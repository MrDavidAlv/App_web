import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoHeader from "./../assets/img/logo.png";
import imgMenu from "./../assets/img/menu.png"
import './../assets/css/Header.css';

const Header = () => {

    return (
        <>
            <Navbar className="contNav" expand="md">
                <Container fluid>
                    <Navbar.Brand className="log1">
                        <img className="logoHeader" src={logoHeader}></img>
                    </Navbar.Brand>
                    <Navbar.Brand><img className="btnMenu" src={imgMenu}></img></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse id="basic-navbar-nav" className="navMobile log2">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link className="linkHeader" href="/">Sobre nosotros</Nav.Link>
                            <Nav.Link className="linkHeader" href="/">Proveedores</Nav.Link>
                            <Nav.Link className="linkHeader" href="/">Contactenos</Nav.Link>
                            <Nav.Link className="linkHeader" href="/">Coberturaas</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
