import styles from "./styles.module.scss";
import pana from "../../assets/img/pana.png";
import { Container, Row, Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Market() {
  const [t] = useTranslation();

  return (
    <section
      className={`${styles.section} ${styles.sectionDark} ${styles.darkSection}`}
      id="howtobeg"
    >
      <Container>
        <Row className={`align-items-center ${styles.sectionRow}`}>
          <div className="col-md-5 p-0">
            <div className={`section-content ${styles.sectionImg}`}>
              <Image src={pana} fluid alt="" />
            </div>
          </div> 
          <div className="col-md-7 p-0 text-right">
            <div className={`section-content ${styles.content}`}>
              <h4>
                {t('SellContent')} <br /> {t('DigitalProduction')}
              </h4>
              <p>{t('PublishAdsLives')} <b> 
              {t('WalletBlockChain')}.
                </b>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
export default Market;
