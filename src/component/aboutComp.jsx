import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import feather from "feather-icons";
import image2 from '../assets/img/modul/about.png';
import image3 from '../assets/img/icon/skanesa.png';

const AboutComp = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div>
            <div id="about">
                <Container className="d-flex justify-content-center mt-3">
                    <Row className="d-flex justify-content-between align-items-center w-100">
                        <Col>
                            <h1 className="text-warning border-bottom fw-bold">Latar Belakang</h1>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <img src={image3} alt="about" className="img-fluid" width={80} />
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex flex-column justify-content-center align-items-center vh-100 w-100">
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6} className="order-1 order-md-1 mb-3 mb-md-0">
                            <p className="text-white mt-5">
                                Pendidikan adalah fondasi utama bagi perkembangan masyarakat dan bangsa. Dalam hal pembelajaran, evaluasi merupakan bagian integral yang membantu mengukur pemahaman dan keterampilan siswa. Dengan berkembangnya teknologi, terutama dalam bahasa pemrograman Python dan antarmuka grafis pengguna ( GUI ), pengembangan aplikasi berbasis Python GUI dapat menjadi solusi yang efektif dan menarik. Python menawarkan sintaksis yang sederhana dan mudah dipahami, sementara antarmuka grafis memungkinkan pembuatan aplikasi yang lebih user-friendly dan interaktif.
                            </p>
                        </Col>
                        <Col xs={12} md={6} className="order-2 order-md-2">
                            <img src={image2} alt="Welcome" className="img-fluid" width={550} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="border-bottom "></div>

            <div className="mb-5 pd-5 d-flex justify-content-center vh-100 align-items-center" id="tujuan">
                <div>
                    <Container className="d-flex justify-content-center mt-3">
                        <Row className="d-flex justify-content-between align-items-center w-100">
                            <Col>
                                <h1 className="text-warning text-center fw-bold">Tujuan</h1>
                                <p className="text-warning text-center border-bottom">Tujuan utama dari proyek ini adalah menciptakan sebuah platform yang memungkinkan para petugas perpustakaan untuk dapat membuat dan mengelola data secara mudah. Adapun tujuan khusus meliputi:</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="d-flex justify-content-center align-items-center mt-5 ">
                        <Row>
                            <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                                <Card border="warning" style={{ width: '18rem' }} className="bg-success">
                                    <Card.Body>
                                        <Card.Text className="text-white">
                                            Mempermudah petugas perpustakaan dalam memasukkan data peminjaman dan pengunjung perpustakaan.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                                <Card border="warning" style={{ width: '18rem' }} className="bg-success">
                                    <Card.Body>
                                        <Card.Text className="text-white">
                                            Project ini berbasis WEB agar mudah di akses oleh petugas dan client.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="border-bottom "></div>

            <div className="mb-5 pd-5 d-flex justify-content-center vh-100 align-items-center" id="manfaat">
                <div>
                    <Container className="d-flex justify-content-center mt-3">
                        <Row className="d-flex justify-content-between align-items-center w-100">
                            <Col>
                                <h1 className="text-warning text-center fw-bold">Manfaat</h1>
                                <p className="text-warning text-center border-bottom">Manfaat utama dari proyek ini meliputi:</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="d-flex justify-content-center align-items-center mt-5 ">
                        <Row>
                            <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                                <Card border="warning" style={{ width: '18rem' }} className="bg-primary">
                                    <Card.Body>
                                        <Card.Text className="text-white">
                                            Mempermudah petugas perpustakaan untuk memasukkan data, agar tidak diketik secara manual lagi.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                                <Card border="warning" style={{ width: '18rem' }} className="bg-primary">
                                    <Card.Body>
                                        <Card.Text className="text-white">
                                            Mempermudah siswa/pengunjung untuk dapat melihat ketersediaan buku dan mengetahui detail tentang waktu/masa aktif peminjaman buku dan pengembalian buku.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="border-bottom pb-5"></div>

            <div className="mb-5 pd-5 d-flex justify-content-center vh-100 align-items-center" id="demo">
                <div className="w-100">
                    <Container className="d-flex justify-content-center mt-3" id="manfaat">
                        <Row className="d-flex justify-content-between align-items-center w-100">
                            <Col>
                                <h1 className="text-warning text-center fw-bold border-bottom">Demo</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="d-flex justify-content-center align-items-center mt-5 w-100">
                        <Row className="w-100">
                            <iframe width="100%" height={550} src="https://www.youtube.com/embed/os4mnM_xepo?si=eIFFxbAUEng6k7n6"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="border-bottom "></div>
        </div>
    );
};

export default AboutComp;
