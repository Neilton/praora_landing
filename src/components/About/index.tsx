import styles from "./styles.module.scss";
import bro from "../../assets/img/bro.png";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function About() {
  const [t] = useTranslation();

  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <Row className="align-items-center">
          <Col className="col-md-5 pt-0 pt-md-4 pt-lg-4 pb-0 pb-md-2 pb-lg-2">
            <div className={`section-content ${styles.sectionImg}`}>
              <Image src={bro} fluid alt="" />
            </div>
          </Col>
          <Col md={7} className="text-right">
            <div className={`section-content ${styles.darkSecContent}`}>
              <h4>{t('whatisPraora.description')}</h4>
              <p>
              {t('whatisPraora.part1')}<b>{t('platformStreaming')}</b> {t('whatisPraora.part2')}
              </p>
              <p>
              {t('whatisPraora.part3')}
              <b> {t('whatisPraora.part4')}</b>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
