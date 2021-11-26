import React from "react";
import { useTranslation } from 'react-i18next';
import Rafiki from "../../../assets/img/rafiki.png";
import Slack from "../../../assets/img/icon/slack.png";
import styles from "./styles.module.scss";
import Button from "../../Core/Button";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

function Contact() {
  const [t] = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const ReCAPTCHAKey = "6LdSrFwdAAAAALH3mCSr22lqrQnwFQA3g1aR6OVC"
  const onSubmit = handleSubmit(async data => {
    const api_key = "UEESivQTrbbYQFwnwBCjbVvjJAWDqYxpCcqt"
    const url = "https://api.rd.services/platform/conversions?api_key=" + api_key;

    const request = {
      event_type: "CONVERSION",
      event_family: "CDP",
      "payload": { 
        conversion_identifier: "Landing Page Form",
        name: data.fullName,
        email: data.email,
        cf_message: data.message
      }
    }

    axios.post(url, request)
        .then(response => console.log(response))
        .catch(error => {
          console.error('There was an error!', error);
      });
  });


  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

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
              <div className="d-flex justify-content-center">
              <ReCAPTCHA sitekey={ReCAPTCHAKey} onChange={onChange}>
              <form onSubmit={onSubmit} className="mb-5">
                <div className={styles.formContent}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t('YourName')}</label>
                    <input type="text" className="form-control" id="name" placeholder={t('EgJohnnyBravo')} {...register("fullName", { required: true })} />
                    <p className="text-info">{errors.fullName?.type === 'required' && t('FirstNameRequired')}</p>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="InputEmail1">{t('YourEmail')}</label>
                    <input type="email" className="form-control" id="InputEmail1" placeholder={t('EmailSample')} {...register("email", { required: true })} />
                    <p className="text-info">{errors.email && t('EmailRequired')}</p>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="textarea">{t('YourMessage')}</label>
                    <textarea className="form-control" id="textarea" placeholder={t('Message')} defaultValue={""} {...register("message")} />
                    <p className="text-info">{errors.message && t('MessageWrong')}</p>
                  </div>
                  <Button className={styles.submBtn}>{t('SendMessage')}</Button>
                </div>
              </form>
              </ReCAPTCHA>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default Contact;