import styles from "./styles.module.scss";
import amico from "../../assets/img/amico.png";
import Button from "../Core/Button";
import { Col, Container, Row, Image } from "react-bootstrap";

function Hero() {
  return (
    <section className={styles.section}>
      <Container fluid="sm">
        <Row className="row align-items-center">
          <Col md={6}>
            <div className="section-content section1-content">
              <h4>
                Live streaming nunca foi tão <br />
                fácil ;)
              </h4>
              <p>
                <b>
                  Crie sua live, interaja com o público, gerencie os recursos e
                  ganhos numa mesma plataforma. Tudo unificado para facilitar
                  seu dia-a-dia!
                </b>
              </p>
              <Button>
                <a>Acessar a plataforma</a>
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
