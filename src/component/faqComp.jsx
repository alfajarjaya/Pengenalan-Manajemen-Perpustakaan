import React from "react";
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import '../css/main.css'

const FaqComp = () => {
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="w-100 m-5">
                <Container className="d-flex justify-content-center align-items-center mt-5" id="manfaat">
                    <Row className="d-flex justify-content-between align-items-center w-100">
                        <Col>
                            <h1 className="text-warning text-center fw-bold">Pertanyaan</h1>
                            <p className="text-warning text-center border-bottom pb-2">Beberapa pertanyaan seputar project ini.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="d-flex justify-content-center align-items-center">
                    <Accordion style={{ width: '80%' }} variant="primary">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Apa tujuan utama dari project ini ?</Accordion.Header>
                            <Accordion.Body>
                                <ol>
                                    <li>
                                        <p>Menciptakan sebuah platform berbasis web yang memungkinkan para petugas perpustakaan untuk dapat membuat dan mengelola data secara mudah.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header >Mengapa menggunakan bahasa pemrograman tersebut ?</Accordion.Header>
                            <Accordion.Body >
                                <ol>
                                    <li>
                                        <p><strong className="text-bold text-warning">Python</strong> sebagai Bahasa Pemrograman yang menjadi cabang/bahasa utama dari project ini.</p>
                                    </li>
                                    <li>
                                        <p><strong className="text-bold text-warning">HTML</strong> Bahasa standar dalam membuat sebuah website.</p>
                                    </li>
                                    <li>
                                        <p><strong className="text-bold text-warning">CSS</strong>sebagai style agar website tersebut nyaman dan enak untuk dilihat oleh semua orang.</p>
                                    </li>
                                    <li>
                                        <p><strong className="text-bold text-warning">JavaScript</strong> digunakan untuk berkoneksi antara FrontEnd dengan BackEnd ( menggunakan fungsi AJAX ) untuk memproses dalam aplikasi CRUD di dalam project ini.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header >Mengapa Menggunakan Python Flask ?</Accordion.Header>
                            <Accordion.Body >
                                <ol>
                                    <li>
                                        <p>Flask adalah sebuah framework web development yang sangat ringan, hal ini bisa terjadi karena core dengan desain modular yang super simpel.</p>
                                    </li>
                                    <li>
                                        <p>Framework ini menggunakan bahasa yang sangat friendly untuk pemula, sehingga akan lebih mudah mempelajari Python dengan framework ini.</p>
                                    </li>
                                    <li>
                                        <p>Framework ini memungkinkan Anda membangun web development, yang mencakup pengembangan front end dan back end. Sehingga Anda lebih leluasa untuk mengembangkan web, dalam satu framework saja.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Bagaimana cara mengintegrasikan MySQL dengan Flask ?</Accordion.Header>
                            <Accordion.Body >
                                <ol>
                                    <li>
                                        <p>Menggunakan library seperti mysql.connector untuk menghubungkan aplikasi Flask dengan database MySQL. Ini memungkinkan saya untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data buku, data peminjaman, dan data pengunjung.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header >Apa fungsi OpenCV dalam project ini ?</Accordion.Header>
                            <Accordion.Body >
                                <ol>
                                    <li>
                                        <p>Menggunakan OpenCv untuk melakukan pemrosesan data dari QrCode pengunjung. Ini termasuk fitur seperti Scanner QrCode yang ada di dalam project ini.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header >Mengapa menggunakan EmailJS ?</Accordion.Header>
                            <Accordion.Body >
                                <ol>
                                    <li>
                                        <p>EmailJS digunakan untuk mengirim data peminjaman secara langsung dari frontEnd tanpa perlu server email di sisi backEnd. Ini sangat berguna untuk pengiriman notifikasi saat user meminjam sebuah buku.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Apa fungsi SweetAlert2 dalam project ini ?</Accordion.Header>
                            <Accordion.Body>
                                <ol>
                                    <li>
                                        <p>SweetAlert2 digunakan untuk menampilkan notifikasi atau alert yang menarik dan responsif kepada pengguna. Ini menggantikan alert bawaan browser dengan tampilan yang lebih estetis dan user-friendly, sehingga meningkatkan pengalaman pengguna.</p>
                                    </li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
                <div className="border-bottom w-100 d-flex align-items-center" style={{ height: '300px' }}></div>
            </div>
        </div>
    );
}

export default FaqComp;