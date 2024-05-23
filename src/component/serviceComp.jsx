import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const importAll = (r) => r.keys().map(r);

const imagesFrameWork = importAll(
    require.context('../assets/img/framework', false, /\.(png|jpe?g|svg)$/)
);

const imagesLanguages = importAll(
    require.context('../assets/img/language', false, /\.(png|jpe?g|svg)$/)
)

const serviceComp = () => {
    const imagesToShow = imagesFrameWork.length > 3 ? imagesFrameWork : imagesFrameWork.slice(0, 3);
    const imagesToShow2 = imagesLanguages.length > 3 ? imagesLanguages : imagesLanguages.slice(0,3);


    return (
        <div>
            <div className="mt-5 pt-5 d-flex justify-content-center min-vh-100 align-items-center" id="demo">
                <div className="w-100">
                    <Container className="d-flex justify-content-center mt-3" id="manfaat">
                        <Row className="d-flex justify-content-between align-items-center w-100">
                            <Col>
                                <h1 className="text-warning text-center fw-bold">Teknologi yang digunakan</h1>
                                <p className="text-warning text-center border-bottom pb-2">Framework dan Library yang digunakan dalam project ini meliputi: </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-5 w-100">
                        <Row >
                            {imagesToShow.map((image, index) => (
                                <Col key={index} md={4} className="d-flex justify-content-center align-items-center">
                                    <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid gallery-img" style={{ width: '60%' }} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="border-bottom "></div>

            <div className="mt-5 pt-5 d-flex justify-content-center min-vh-100 align-items-center" id="demo">
                <div className="w-100">
                    <Container className="d-flex justify-content-center mt-3" id="manfaat">
                        <Row className="d-flex justify-content-between align-items-center w-100">
                            <Col>
                                <h1 className="text-warning text-center fw-bold">Bahasa Pemograman</h1>
                                <p className="text-warning text-center border-bottom pb-2">Bahasa Pemrograman yang digunakan pada project ini meliputi :</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-5 w-100">
                        <Row >
                            {imagesToShow2.map((image, index) => (
                                <Col key={index} md={4} className="d-flex justify-content-center align-items-center">
                                    <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid gallery-img" style={{ width: '60%' }} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="border-bottom "></div>
        </div>
    )
}

export default serviceComp;