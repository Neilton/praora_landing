import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import Rafiki from "../../../assets/img/rafiki.png";
import Slack from "../../../assets/img/icon/slack.png";
import styles from "./styles.module.scss";
import Button from "../../Core/Button";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

function Contact() {
  const [t] = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const ReCAPTCHAKey = "6LcMyl4dAAAAANJB0l6a5GJcLVxW7AO1YH3eXfat";
  const onSubmit = handleSubmit(async data => {
    const api_key = "UEESivQTrbbYQFwnwBCjbVvjJAWDqYxpCcqt"
    const url = `https://api.rd.services/platform/conversions?api_key="${api_key}"`;

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

    try {
      const resp = await axios.post(url, request)
      const { status } = await resp;
      status === 200 ? toast.success(t("ThanksForYourInteresting")) : toast.error(t("HumSomethingGoesWrong"))
    } catch (err) {
      toast.error(t("HumSomethingGoesWrong"), { autoClose: 5000 })
    }
  });

  const onSubmitWithReCAPTCHA = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (recaptchaRef.current !== null) {
        const _result = await recaptchaRef.current.executeAsync();
        console.log(_result);
      }
    } catch (err) {
      toast.error(t("ReCAPTCHA"));
    }
  }

  function redoCaptcha() {
    if (recaptchaRef.current !== null) {
      recaptchaRef.current.reset();
      recaptchaRef.current.execute();
    }
  }

  return <React.Fragment>
    <section className={styles.contactWrap} id="contact">
      <ToastContainer />
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
                <form onSubmit={onSubmitWithReCAPTCHA}>
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
                    <div className="mt-4">
                      <ReCAPTCHA ref={recaptchaRef} sitekey={ReCAPTCHAKey} size="invisible" 
                      badge="inline" onExpired={redoCaptcha} onErrored={() => toast.error(t("HumSomethingGoesWrong"), { autoClose: 5000 })} 
                      onChange={() => onSubmit}
                      /></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default Contact;