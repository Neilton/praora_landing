import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Rafiki from "../../../assets/img/rafiki.png";
import Slack from "../../../assets/img/icon/slack.png";
import styles from "./styles.module.scss";
import Button from "../../Core/Button";
import { useForm } from "react-hook-form";
import api from "../../../features/api";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

function Contact() {
  const [t] = useTranslation();
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  

  return <React.Fragment>
    <section className={styles.contactWrap} id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className={styles.contactContent}>
              <h4>{t('ContactUs')}</h4>
              <p>{t('QuestionOrSuggestions')}</p>
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
              <form onSubmit={onSubmit}>
                <div className={styles.formContent}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t('YourName')}</label>
                    <input type="text" className="form-control" id="name" placeholder={t('EgJohnnyBravo')} {...register("fullName")} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="InputEmail1">{t('YourEmail')}</label>
                    <input type="email" className="form-control" id="InputEmail1" placeholder={t('EmailSample')} {...register("email")} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="textarea">{t('YourMessage')}</label>
                    <textarea className="form-control" id="textarea" placeholder={t('Message')} defaultValue={""} {...register("message")} />
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