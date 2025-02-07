/* eslint-disable */
import React, { useState } from 'react';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, NavbarBrand, Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="topbar" id="top">
            <div className="header1 po-relative navbar-custom">
                <Container>
                    <Navbar className="navbar-expand-lg h2-nav">
                        <NavbarBrand href="/" className='text-white'>Estudio Parisi Abogados</NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu text-white"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar id="header1">
                            <Nav navbar className="ms-auto mt-2 mt-lg-0">
                                <NavItem className="active"><NavLink href="#">Inicio</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        Profesionales <i className="fa fa-angle-down m-l-5"></i>
                                    </DropdownToggle>
                                    <DropdownMenu dark className="b-none animated fadeInUp">
                                        <DropdownItem onClick={() => scrollToSection('socio-fundador')}>Socio Fundador</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem><NavLink href="#" onClick={() => scrollToSection('areas-de-practica')}>Areas de Práctica</NavLink></NavItem>
                                <NavItem><NavLink href="#" onClick={() => scrollToSection('especializacion')}>Especialización</NavLink></NavItem>
                                <NavItem><a className="btn btn-outline-info" href="#">Contacto</a></NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
}

export default Header;