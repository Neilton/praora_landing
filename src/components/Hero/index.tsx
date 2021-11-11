import styles from './styles.module.scss'
import amico from "../../assets/img/amico.png";
import Button from '../Core/Button';

function Hero() {
    return(
        <section className={styles.section}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="section-content section1-content">
                        <h4>Live streaming nunca foi tão <br/>fácil ;)</h4>
                        <p>
                            <b>
                                Crie sua live, interaja com o público, gerencie os recursos e
                                ganhos numa mesma plataforma. Tudo unificado para facilitar seu dia-a-dia!
                            </b>
                        </p>
                        <Button><a>Acessar a plataforma</a></Button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`section-content ${styles.sectionImg}`}>
                        <img src={amico} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero;