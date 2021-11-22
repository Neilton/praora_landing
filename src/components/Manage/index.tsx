import styles from "./styles.module.scss";
import amicoMoney from "../../assets/img/amico-money.png";
import { Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Manage() {
  const [t] = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <Row className="row align-items-center">
          <div className="col-md-7">
            <div className="section-content">
              <h4>
              {t('ManageEarnings')} <br /> {t('TransactionsEasily')}
              </h4>
              <p>
              {t('CreateNewOneOrImportyourown')}{" "}
                <b>{t('NoDataExposure')}.</b>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className={`section-content ${styles.sectionImg}`}>
              <Image src={amicoMoney} className="img-fluid" alt="" fluid />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Manage;
