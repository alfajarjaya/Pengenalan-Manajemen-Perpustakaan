import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const NavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 0) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor);
        return () => {
            window.removeEventListener("scroll", changeBackgroundColor);
        };
    }, []);



    return (
        <div className="navbar">
            {["xxl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    fixed="top"
                    className={`mb-3 border-bottom ${changeColor ? "nav-active" : "nav-active"}`}
                    variant="dark"
                >
                    <Container fluid className="p-3">
                        <Navbar.Brand href="#" className="text-white text-shadow">
                            Manajemen Perpustakaan
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="navbar-nav justify-content-end offcanvas-mobile-half-height"
                        >
                            <Offcanvas.Header closeButton className="navbar-nav">
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white text-shadow">
                                    Manajemen Perpustakaan
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="navbar-nav">
                                <Nav className="justify-content-end flex-grow-1 pe-5">
                                    <Nav.Link href="#about" className="text-white text-shadow">
                                        Latar Belakang
                                    </Nav.Link>
                                    <Nav.Link href="#tujuan" className="text-white text-shadow">
                                        Tujuan
                                    </Nav.Link>
                                    <Nav.Link href="#manfaat" className="text-white text-shadow">
                                        Manfaat
                                    </Nav.Link>
                                    <Nav.Link href="#demo" className="text-white text-shadow">
                                        Demo
                                    </Nav.Link>
                                    <Nav.Link href="https://alfajarjaya.github.io/Manajemen-Perpustakaan-2/flowchartProject.png" target="_blank" rel="noreferrer" className="text-white text-shadow">
                                        Cara Kerja
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}

export default NavbarComp;
