import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/logo.png";

import Container from "react-bootstrap/Container";
import Button from "../Core/Button";
function NavBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand
      expanded
      className={`${styles.navbar} ${styles.navbarScr} nav-src justify-content-center`}
      data-spy="scroll"
      data-target=".nav-wrp"
    >
      <Container fluid className={styles.navbarContent}>
        <a href="#" className={styles.navbarBrand}>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className={"img-fluid"} />
          </Navbar.Brand>

          <span>praora</span>
        </a>
        <Nav className={styles.navWrp}>
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
              <a href="#!" data-scroll="recursos" className={styles.navLink}>
                Recursos
              </a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.navItem}>
              <a href="#!" data-scroll="howtobeg" className={styles.navLink}>
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

        </Nav>
        <Button>
            <a>
              Acessar a plataforma
            </a>
        </Button>

        <Navbar.Toggle className={styles.toggleBar}>
          <img src="assets/img/icon/bar.png" className={"img-fluid"} alt="" />
        </Navbar.Toggle>
      </Container>
    </Navbar>
  );
}

export default NavBar;
