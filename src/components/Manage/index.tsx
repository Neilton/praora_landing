import styles from "./styles.module.scss";
import amicoMoney from "../../assets/img/amico-money.png";
import { Container, Row } from "react-bootstrap";

function Manage() {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="row align-items-center">
          <div className="col-md-7">
            <div className="section-content">
              <h4>
                Gerencie seus ganhos e faça <br /> transações facilmente
              </h4>
              <p>
                Crie uma nova ou utilize a sua própria carteira digital para
                gerenciar o quanto você ganha na plataforma. Você pode fazer
                transações dentro da Praora, de forma descomplicada e{" "}
                <b>sem exposição de dados.</b>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className={`section-content ${styles.sectionImg}`}>
              <img
                src={amicoMoney}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Manage;
