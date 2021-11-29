import logoWhite from "../../assets/img/logo-white.png";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import styles from "./styles.module.scss";
function Footer() {
  return (
    <Card.Footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={12}>
            <div
              className={styles.footerContent}
            >
                <a href="https://praora.com" className={styles.logo}>
                  <Image src={logoWhite} alt="Praora logo" />
                  <span>praora</span>
                </a>
                <div className={styles.logoSection}>
              </div>
              <div className={styles.networkSection}>
                <p className="text-center">IORA Network</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Card.Footer>
  );
}
export default Footer;
