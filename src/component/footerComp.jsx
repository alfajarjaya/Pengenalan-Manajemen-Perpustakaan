import React, {useEffect} from "react";
import { Container, Row, Col} from "react-bootstrap";
import feather from 'feather-icons';

const FooterComp = () => {
    useEffect(() => {
        feather.replace()
    }, []);

    return (
        <footer className="navbar-nav text-white">
            <Container>
                <Row className="justify-content-evenly pt-5">
                    <Col md={2} className="">
                        <h5>Terkait Project</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#about" className="text-warning text-shadow">Latar Belakang</a>
                            </li>
                            <li>
                                <a href="#tujuan" className="text-warning text-shadow">Tujuan</a>
                            </li>
                            <li>
                                <a href="#manfaat" className="text-warning text-shadow" >Manfaat</a>
                            </li>
                            <li>
                                <a href="#proker" className="text-warning text-shadow">Demo</a>
                            </li>
                            <li>
                                <a href="https://alfajarjaya.github.io/Manajemen-Perpustakaan-2/flowchartProject.png" target="_blank" rel="noreferrer" className="text-warning text-shadow">Cara Kerja</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="">
                        <h5>Team : </h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.instagram.com/cplngz_/" target="_blank" rel="noreferrer" className="text-warning">Nabil Zafir</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/miftaqns/" target="_blank" rel="noreferrer" className="text-warning">Miftahul N</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/kurniasandip/" target="_blank" rel="noreferrer" className="text-warning">Kurnia Sandi</a>
                            </li>
                            <li>
                                <a href="https://bangjarrr.github.io" target="_blank" rel="noreferrer" className="text-warning">Alfajjar Syachputra</a>
                            </li>
                        </ul>
                        <h5>Member of : </h5>
                        <p>
                            <a href="https://www.instagram.com/xitkj2skanesa/" className="text-warning text-shadow">TKJ 2 SMKN 1 Mojokerto</a>
                        </p>
                    </Col>
                    <Col md={2}>
                        <h5>Social Media</h5>
                        <ul className="list-unstyled d-flex justify-content-around align-items-center mt-5 ml-0">
                            <li>
                                <a href="https://www.instagram.com/xitkj2skanesa/" target="_blank" rel="noreferrer">
                                    <i data-feather="instagram" color="#fff"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/alfajarjaya" target="_blank" rel="noreferrer">
                                    <i data-feather="github" color="#fff"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2024 Manajemen || Perpustakaan. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterComp;
