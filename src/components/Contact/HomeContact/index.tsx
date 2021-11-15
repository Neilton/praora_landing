import styles from "./styles.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../Core/Button";
function HomeContact() {
    return(
        <section className={styles.section} id="contact">
        <Container>
            <Row className="section7-row">
                <Col lg={7}>
                    <div className={`section-content ${styles.content} pr-0 pr-lg-3`}>
                        <h4>Se interessou pela <b>Praora?</b></h4>
                        <p>
                            Fique por dentro da lista de investidores, sendo o primeiro a <br /> saber sobre nosso
                            whitepaper e ter <b>descontos exclusivos <br /> nos nossos tokens.</b>
                        </p>
                    </div>
                </Col>
                <Col lg={5} className={styles.form}>
                    <Form action="" className={`${styles.signupForm} pl-0 pl-lg-5`}>
                        <Form.Group className={styles.formGroup}>
                            <Form.Control type="email" className={styles.formControl} id="usr_email" placeholder="Seu email" />
                        </Form.Group>
                        <Form.Group className={styles.formGroup}>
                            <Form.Control type="text" className={styles.formControl} id="full_name" placeholder="Nome completo" />
                            </Form.Group>
                        <Form.Group className={styles.formGroup}>
                            <Form.Control type="text" className={styles.formControl} id="wallet_address"
                                placeholder="Wallet Adress (Opcional)" />
                        </Form.Group>
                        <Button>Inscreva-me</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
export default HomeContact;