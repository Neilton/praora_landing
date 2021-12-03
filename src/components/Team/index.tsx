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
        <h4>Team</h4>
        <div className="about-content pl-40">
          <div className="about-row">
            <div className="founder-content pedro-bio">
              <h6>Fundadores</h6>
              <h6 className="founder-name">Pedro Magalhaes</h6>
              <p>
                Degree in Software Engineering, Analysis and System Development in Rio de Janeiro, Brazil also
                did an exchange in a University in Santiago, Chile, where he could earn Spanish and studied
                DevOps, UNIX compilers, and Project Management.
              </p>
              <p>
                High experience working in IT Infrastructure and Cloud Computing. He started several projects,
                as a Full-stack developer at Paypal, Western Union, and Citi Ventures, creating several
                successful MVPs. For the last 2 years, it has specialized in decentralized application
                solutions.
              </p>
              <hr className="c_hr p_hr" />
              <div className="abt-links">
                <h5>Links</h5>
                <ul>
                  <li><a href="#"><img src={Github} alt="" /></a></li>
                  <li><a href="#"><img src={Linkedin} alt="" /></a></li>
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
                Carlos is an engineer and entrepreneur in Brazil. He has been working with technology and
                automation for over 30 years. He has extensive experience in the national market from promoting
                corporate events to product development and business organizations. Last years, he has been
                dedicated to promoting small startups in the technology sector.
              </p>
              <hr className="c_hr ca_hr" />
              <div className="abt-links">
                <h5>Links</h5>
                <ul>
                  <li><a href="#"><img src={Linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-row">
            <div className="founder-content">
              <h6>CTO</h6>
              <h5 className="founder-name">Neiton</h5>
              <p>
                Com trajetória profissional focada em desenvolvimento, implementação e gestão de soluções
                tecnológicas para empresas do mercado de seguro, varejo e mercado financeiro, gerenciou equipes
                na entrega de projetos que permitiram o desenvolvimento de produtos para o mercado financeiro.
                Possui MBA com foco em arquitetura de soluções, além de certificações em arquitetura de soluções
                para nuvem.
              </p>
              <hr className="c_hr n_hr" />
              <div className="abt-links">
                <h5>Links</h5>
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
                Ramiro started studying software engineering in 2015 at ORT University Uruguay and is almost
                graduated. At his 26th he joined big tech companies such as Salesforce and XPO Logistics working
                as a Backend Software Developer participating on several projects developed in Java.
              </p>
              <p>
                In the last 6 months he joined into a big fintech company related to payment solutions called
                dLocal also developing Java applications over microservice architectures.
              </p>
              <p>
                He also interested in blockchain technology and crypto economy where he is learning them and
                trying to contribute to develop distributed apps
              </p>
              <hr className="c_hr r_hr mt-3" />
              <div className="abt-links">
                <h5 className="pt-0">Links</h5>
                <ul>
                  <li><a href="#"><img src={Linkedin} alt="" /></a></li>
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
                <a href="#"><img src={In} alt="" /></a>
              </div>
              <div className="eqp-cont-box">
                <div className="eqp-img-box">
                  <img src={Amico} alt="" className="img-fluid" />
                </div>
                <h6>Marina Sales</h6>
                <p>UX/UI Designer</p>
                <a href="#"><img src={In} alt="" /></a>
              </div>
              <div className="eqp-cont-box">
                <div className="eqp-img-box">
                  <img src={Pana} alt="" className="img-fluid" />
                </div>
                <h6>Antonio Mercadante</h6>
                <p>Fullstack Developer</p>
                <a href="#"><img src={In} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
