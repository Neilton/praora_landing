import { useTranslation } from 'react-i18next';
import React from "react";
import Rafiki from "../../../assets/img/rafiki.png";
import Whatsapp from "../../../assets/img/icon/whatsapp.png";
import Slack from "../../../assets/img/icon/slack.png";
import Telegram from "../../../assets/img/icon/telegram.png";
import styles from "./styles.module.scss";
import Button from "../../Core/Button";

function Contact() {
    const [t] = useTranslation();

    return <React.Fragment>
    <section className={styles.contactWrap} id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className={styles.contactContent}>
                <h4>{t('ContactUs')}</h4>
                <p><b>{t('QuestionOrSuggestions')}</b></p>
                <img src={Rafiki} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.contactForm}>
                <h6>{t('SocialMedias')}</h6>
                <ul className={styles.socialWrp}>
                  <li><a href="https://praora.slack.com/messages/general/" target="__blank" rel="noopen"><img src={Slack} alt="Slack" /></a></li>
                </ul>
                <div className={`${styles.formHeading} position-relative`}>
                  <hr className={styles.formHr} />
                  <h6 className="mb-0">{t('SendUsMessage')}</h6>
                  <hr className={styles.formHr} />
                </div>
                <form>
                  <div className={styles.formContent}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">{t('YourName')}</label>
                      <input type="text" className="form-control" id="name" placeholder={t('EgJohnnyBravo')} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="InputEmail1">{t('YourEmail')}</label>
                      <input type="email" className="form-control" id="InputEmail1" placeholder={t('EmailSample')} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="textarea">{t('YourMessage')}</label>
                      <textarea className="form-control" id="textarea" placeholder={t('Message')} defaultValue={""} />
                    </div>
                    <Button className={styles.submBtn}>{t('SendMessage')}</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
}

export default Contact;