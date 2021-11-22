import styles from "./styles.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../Core/Button";
import { useTranslation } from 'react-i18next';

function HomeContact() {
    const [t] = useTranslation();

    return(
        <section className={styles.section} id="contact">
        <Container>
            <Row className="section7-row">
                <Col lg={7}>
                    <div className={`section-content ${styles.content} pr-0 pr-lg-3`}>
                        <h4>{t('interestedInPraora')} <b>Praora?</b></h4>
                        <p>
                        {t('ExclusiveOffer.part1')} <b> {t('ExclusiveOffer.part2')} <br />  {t('ExclusiveOffer.part3')}.</b>
                        </p>
                    </div>
                </Col>
                <Col lg={5} className={styles.form}>
                    <Form action="" className={`${styles.signupForm} pl-0 pl-lg-5`}>
                        <Form.Group className={styles.formGroup}>
                            <Form.Control type="email" className={styles.formControl} id="usr_email" placeholder={t('YourEmail')} />
                        </Form.Group>
                        <Form.Group className={styles.formGroup}>
                            <Form.Control type="text" className={styles.formControl} id="wallet_address"
                                placeholder={t('WalletAddress')} />
                        </Form.Group>
                        <Button>{t('GetinTouch')}</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
export default HomeContact;