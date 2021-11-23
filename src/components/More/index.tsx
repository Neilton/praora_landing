import styles from "./styles.module.scss";
import cuate from "../../assets/img/cuate.png";
import { Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function More() {
  const [t] = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <Row className={`row ${styles.sectionRow} ml-1 mr-1 row`}>
          <div className="col-md-3">
            <div className={`section-content ${styles.sectionImg}`}>
              <Image src={cuate} fluid className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="section-content pr-0 pr-lg-5 pl-0 pl-lg-5">
              <h4>{t('AndThereMore')}</h4>
              <p>{t('EarninginIBRLIORA')}
                {" "}
                <b>{t('TheIORA')}!</b>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default More;
