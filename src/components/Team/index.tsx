import { useTranslation } from 'react-i18next';
import "../../assets/shared/styles/style.css";
import "../../assets/shared/styles/responsive.css";
import Github from "../../assets/img/icon/github.png"
import Linkedin from "../../assets/img/icon/linkedin.png"
import Pedro from "../../assets/img/about-us/Pedro.png"
import Carlos from "../../assets/img/about-us/Carlos.png"
import Neilton from "../../assets/img/about-us/neilton.png"
import Ramiro from "../../assets/img/about-us/ramiro.png"
import Rafiki from "../../assets/img/about-us/rafiki.png"
import In from "../../assets/img/icon/in.png"
import Amico from "../../assets/img/about-us/amico.png"
import Pana from "../../assets/img/about-us/pana.png"

function Team() {
  const [t] = useTranslation();

  return (
    <section id="team">
     <div className="about-us">
        <h4>{t('team')}</h4>
        <div className="about-content pl-40">
          <div className="about-row">
            <div className="founder-content pedro-bio">
              <h6>{t("Founders")}</h6>
              <h6 className="founder-name">Pedro Magalhaes</h6>
              <p>
              {t("PedroDesc.Part1")}
              </p>
              <p>
                
                {t("PedroDesc.Part2")}
              </p>
              <hr className="c_hr p_hr" />
              <div className="abt-links">
                <h5>Links</h5>
                <ul>
                  <li><a href="https://github.com/pedrosgmagalhaes/"><img src={Github} alt="" /></a></li>
                  <li><a href="https://www.linkedin.com/in/pemagalhaes/"><img src={Linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="founder-pic pic-pedro same1_over_pic">
              <img src={Pedro} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="about-row pb_40 sm2_row2">
            <div className="founder-pic pic-carlos same2_over_pic">
              <img src={Carlos} alt="" className="img-fluid" />
            </div>
            <div className="founder-content carlos-bio">
              <h6 className="founder-name">Carlos Gaspar</h6>
              <p>
                {t("CarlosDesc.Part1")}
              </p>
              <hr className="c_hr ca_hr" />
              <div className="abt-links">
                <h5>Links</h5>
                <ul>
                  <li><a href="https://www.linkedin.com/in/carlos-g-02b4771"><img src={Linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-row">
            <div className="founder-content">
              <h6>CTO</h6>
              <h5 className="founder-name">Neiton</h5>
              <p>
              {t("Neiton")}
              </p>
              <hr className="c_hr n_hr" />
              <div className="abt-links">
                <h5>{t("Links")}</h5>
                <ul>
                  <li><a href="#"><img src={Linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="founder-pic pic-neiton same1_over_pic">
              <img src={Neilton} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="about-row sm2_row2">
            <div className="founder-pic pic-carlos same2_over_pic">
              <img src={Ramiro} alt="" className="img-fluid" />
            </div>
            <div className="founder-content">
              <h6>Backend Leader / Project Manager</h6>
              <h6 className="founder-name">Ramiro Gonzalez</h6>
              <p>
              {t("Ramiro.Part1")}
              </p>
              <p>
              {t("Ramiro.Part2")}
              </p>
              <p>
              {t("Ramiro.Part3")}
              </p>
              <hr className="c_hr r_hr mt-3" />
              <div className="abt-links">
                <h5 className="pt-0">Links</h5>
                <ul>
                  <li><a href="https://www.linkedin.com/in/ramiro-gonzalez/"><img src={Linkedin} alt="Ramiro Linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="equipe-wrp">
            <h6>Equipe</h6>
            <div className="eqp-row">
              <div className="eqp-cont-box">
                <div className="eqp-img-box">
                  <img src={Rafiki} alt="" className="img-fluid" />
                </div>
                <h6>Lucas Bueno</h6>
                <p>UX/UI Designer</p>
                <a href="https://www.linkedin.com/in/lucasbuenno/"><img src={In} alt="Lucas Bueno Linkedin" /></a>
              </div>
              <div className="eqp-cont-box">
                <div className="eqp-img-box">
                  <img src={Amico} alt="" className="img-fluid" />
                </div>
                <h6>Marina Sales</h6>
                <p>UX/UI Designer</p>
                <a href="https://www.linkedin.com/in/volzsales/"><img src={In} alt="" /></a>
              </div>
              <div className="eqp-cont-box">
                <div className="eqp-img-box">
                  <img src={Pana} alt="" className="img-fluid" />
                </div>
                <h6>Antonio Mercadante</h6>
                <p>Fullstack Developer</p>
                <a href="https://www.linkedin.com/in/antonio-mercadante-5560a919a/"><img src={In} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
