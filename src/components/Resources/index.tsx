import styles from "./styles.module.scss";
import makeLive from "../../assets/img/make-live.png";
import { Container, Row, Image } from "react-bootstrap";

function Resources() {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <div className="col-md-8 section-content-heading">
            <h5>Recursos</h5>
            <div className="section-content section3-content pl-2 pl-md-3 pl-lg-5 pr-0 pr-lg-5">
              <h4>Crie sua live</h4>
              <p>
                A Praora quer ser um facilitador na criação e divulgação de
                conteúdo através de live streaming. Cresça como criador,
                desenvolva uma comunidade própria e acompanhe de perto sua
                evolução como streamer.{" "}
                <b>Não precisa ser difícil fazer o que você já gosta.</b>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="section-content section3-content-img">
              <Image src={makeLive} className="img-fluid" alt="" fluid/>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Resources;
