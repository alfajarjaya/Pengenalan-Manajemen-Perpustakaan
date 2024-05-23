import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import feather from "feather-icons";
import images1 from "../assets/img/modul/welcome.png";
import Swal from "sweetalert2";

const HomeComp = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    const toProject = () => {
        Swal.fire({
            title: 'Menu belum tersedia.',
            text: 'Menu ini seharusnya langsung mengarah ke website project, namun untuk saat ini masih belum tersedia.',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        })
    }

    const learnMore = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className="mt-5 pt-5 min-vh-100 w-body">
            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 w-100">
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} className="order-1 order-md-1 mb-3 mb-md-0 ">
                        <h1 className="text-warning">WELCOME TO MANAJEMEN PERPUSTAKAAN</h1>
                        <div className="d-flex justify-content-evenly align-items-center " style={{ width: "70%" }}>
                            <Button variant="primary" className="py-2 px-2 mt-3 text-white" onClick={() => learnMore("about")}>
                                Learn More
                            </Button>
                            <Button variant="outline-warning" className="py-2 px-3 mt-3 " onClick={toProject}>
                                Let's Start
                                <i data-feather="chevron-right" className="ml-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="order-2 order-md-2">
                        <img src={images1} alt="Welcome" className="img-fluid" width={550} />
                    </Col>
                </Row>
            </Container>
            <div className="border-bottom"></div>
        </div>
    );
};

export default HomeComp;
