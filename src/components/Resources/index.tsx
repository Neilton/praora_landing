import styles from "./styles.module.scss";
import makeLive from "../../assets/img/make-live.png";
import { Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Resources() {
  const [t] = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <div className="col-md-8 section-content-heading">
            <h5>{t('resources')}</h5>
            <div className="section-content section3-content pl-2 pl-md-3 pl-lg-5 pr-0 pr-lg-5">
              <h4>{t('startalive')}</h4>
              <p>{t('easyCreation')}
                {" "}
                <b>{t('DoesntHaveToBeDifficult')}</b>
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
