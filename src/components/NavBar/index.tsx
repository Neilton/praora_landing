import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/logo.png";
import bar from "../../assets/img/icon/bar.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Button from "../Core/Button";
function NavBar() {
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
            <a href="#" className={styles.navbarBrand}>
              <Image src={logo} alt="" fluid />
              <span>praora</span>
            </a>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={`${styles.navWrp}`}>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a
                    href="#!"
                    data-scroll="whatispraora"
                    className={styles.navLink}
                  >
                    O que é a Praora
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a
                    href="#!"
                    data-scroll="recursos"
                    className={styles.navLink}
                  >
                    Recursos
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
                    Como começar?
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.navItem}>
                  <a href="#!" data-scroll="contact" className={styles.navLink}>
                    Contato
                  </a>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
          <Button>
            <a>Acessar a plataforma</a>
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
