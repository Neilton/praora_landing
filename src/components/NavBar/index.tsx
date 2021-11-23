import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/logo.png";
import bar from "../../assets/img/icon/bar.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "../Core/Button";
import { useTranslation } from "react-i18next";
import { Link, Button as Sbutton, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function NavBar() {
  const [t] = useTranslation();

  return (
    <Navbar
      fixed="top"
      expand
      className={`${styles.navbar} ${styles.navbarScr} `}
      data-spy="scroll"
      data-target=".nav-wrp"
    >
      <Container fluid="xl">
        <div className={styles.navbarContent}>
          <Navbar.Brand href="#home">
            <div className={styles.navbarBrand}>
              <Image src={logo} alt="" fluid />
              <span>praora</span>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={`${styles.navWrp}`}>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <Link
                    to="resources"
                    spy={true} smooth={true} offset={50} duration={600} delay={100}
                    className={styles.navLink}
                  >
                     {t('resources')}
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a
                    href="#!"
                    data-scroll="team"
                    className={styles.navLink}
                  >
                     {t('team')}
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a
                    href="#!"
                    data-scroll="howtobeg"
                    className={styles.navLink}
                  >
                    {t('roadmap')}
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a href="#!" data-scroll="contact" className={styles.navLink}>
                  {t('docs')}
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a href="#!" data-scroll="contact" className={styles.navLink}>
                  {t('contact')}
                  </a>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
          <Button>
            {t('whitepaper')}
          </Button>
          <Navbar.Toggle className={` ${styles.toggleBar}`}>
            <Image src={bar} className="img-fluid" alt="" />
          </Navbar.Toggle>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
