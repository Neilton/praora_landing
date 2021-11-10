import styles from "./styles.module.scss";
import pana from "../../assets/img/pana.png";
import { Container, Row } from "react-bootstrap";

function Market (){
    return(
        <section className={`${styles.section} section4-dark dark-section`} id="howtobeg">
        <Container>
            <Row className={`row align-items-center ${styles.sectionRow}`}>
                <div className="col-md-5 p-0">
                    <div className={`section-content ${styles.sectionImg}`}>
                        <img src={pana} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-7 p-0 text-right">
                    <div className={`section-content ${styles.content}`}>
                        <h4>Venda seu conteúdo e suas <br /> produções digitais</h4>
                        <p>
                            Você quer vender o desenho digital que produziu
                            em live de forma fácil e rápida? Na Praora, você consegue anunciar
                            na sua live ou deixar no seu canal suas produções e vendê-las ao público.
                            <b>Tudo através da sua carteira digital cadastrada na plataforma.</b></p>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
    )
}
export default Market;