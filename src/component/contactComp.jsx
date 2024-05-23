import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const FaqComp = () => {
    const formRef = useRef(null);

    const sendToEmail = (event) => {
        event.preventDefault();

        const nama = formRef.current.elements['nama'].value;
        const email = formRef.current.elements['email'].value;
        const pesan = formRef.current.elements['pesan'].value;

        if (!nama || !email || !pesan) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Harap isi semua form sebelum mengirim pesan.",
            });
            return;
        }

        const subject = "Kritik dan Saran";
        const body = `Name: ${nama}\nEmail: ${email}\nPesan: ${pesan}`;
        const mailtoLink = `mailto:alfajjar321@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Email berhasil disiapkan!",
            confirmButtonText: "Tutup",
        });
        formRef.current.reset();
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 border-bottom">
            <div className="w-100">
                <Container className="pt-5 pb-5">
                    <Row className="mb-5">
                        <Col>
                            <h1 className="text-center text-warning border-bottom p-2">Kirim Kritik dan Saranmu Terkait Projek ini!</h1>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <Form ref={formRef} className="text-white w-50" onSubmit={sendToEmail} id="my-form">
                            <Form.Group className="mb-3" controlId="formNama">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="nama" id="nama" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" id="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPesan">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="text" placeholder="Enter message" name="pesan" id="pesan" />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default FaqComp;
