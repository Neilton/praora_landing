import React from 'react';
import styles from "./styles.module.scss";
import amico from "../../assets/img/amico.png";
import Button from "../Core/Button";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Hero() {
  const [t] = useTranslation();
  
  return (
    <section className={styles.section}>

      <Container fluid="sm">
        <Row className="row align-items-center ml-1 mr-1 row">
          <Col md={6}>
            <div className="section-content section1-content">
              <h4>
                {t('subTitle')}
              </h4>
              <p>
                {t('description.part1')} {t('description.part2')}
              </p>
              <Button>
                {t('getStarted')}
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className={`section-content ${styles.sectionImg}`}>
              <Image src={amico} fluid alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
