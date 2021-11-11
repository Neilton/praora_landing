import styles from "./styles.module.scss";
import bro from "../../assets/img/bro.png";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section className={styles.section}>
      <Container>
        <div className="row align-items-center">
          <div className="col-md-5 pt-0 pt-md-4 pt-lg-4 pb-0 pb-md-2 pb-lg-2">
            <div className={`section-content ${styles.sectionImg}`}>
              <img src={bro} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-7 text-right">
            <div className={`section-content ${styles.darkSecContent}`}>
              <h4>O que é a praora?</h4>
              <p>
                A Praora é uma <b>plataforma de streaming</b> que unifica todos
                os recursos que você precisa para gerenciar suas lives e ter
                controle dos seus ganhos como produtor de conteúdo.
              </p>
              <p>
                Você pode facilmente iniciar uma live, criar sorteios e vender
                produtos: <b>Tudo no mesmo lugar!</b>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
