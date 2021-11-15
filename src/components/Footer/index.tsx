import logoWhite from "../../assets/img/logo-white.png";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import styles from "./styles.module.scss";
function Footer() {
  return (
    <Card.Footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={6}>
            <div
              className={`${styles.footerContent} ${styles.footerLeftContent}`}
            >
              <a href="#" className={styles.logo}>
                <Image src={logoWhite} alt="Praora logo" />
                <span>praora</span>
              </a>
              <p>Inspirando conexões</p>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${styles.footerContent} ${styles.footerMenu}`}>
              <ul>
                <li>
                  <a href="#">O que é a Praora</a>
                </li>
                <li>
                  <a href="#">Recursos</a>
                </li>
                <li>
                  <a href="#">Como começar?</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Card.Footer>
  );
}
export default Footer;
