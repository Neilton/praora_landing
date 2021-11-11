import styles from "./styles.module.scss";
import cuate from "../../assets/img/cuate.png";
import { Container, Row } from "react-bootstrap";

function More() {
return(
    <section className={styles.section}>
        <Container>
            <Row className={`row ${styles.sectionRow}`}>
                <div className="col-md-3">
                    <div className={`section-content ${styles.sectionImg}`}>
                        <img src={cuate} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="section-content pr-0 pr-lg-5 pl-0 pl-lg-5">
                        <h4>E tem mais...</h4>
                        <p>
                            Com a carteira digital, você pode ter seus ganhos em iBRL, bitcoin, ethereum ou até
                            mesmo própria moeda da Praora: <b>A IORA!</b>
                        </p>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
)
}

export default More;