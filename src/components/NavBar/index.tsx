import { useState } from "react";
import styles from "./styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/logo.png";
import bar from "../../assets/img/icon/bar.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "../Core/Button";
import { useTranslation } from "react-i18next";
import { Link as RLink } from "react-scroll";
import { isMobile } from "react-device-detect";

function NavBar() {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const close = () => {
    console.log(isOpen);
    setIsOpen(false);
  };
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
            <div
              className={
                isOpen
                  ? `${styles.navWrp} ${styles.activated} `
                  : `${styles.navWrp} ${styles.navWrap}`
              }
            >
              <RLink
                to="WhatIsPraora"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                delay={100}
                className={styles.navLink}
                onClick={close}
              >
                <Nav.Item>
                  <Nav.Link className={styles.navItem}>
                    {t("WhatIsPraora")}
                  </Nav.Link>
                </Nav.Item>
              </RLink>
              <RLink
                to="resources"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                delay={100}
                className={styles.navLink}
                onClick={close}
              >
                <Nav.Item onClick={close}>
                  <Nav.Link className={styles.navItem}>
                    {t("resources")}
                  </Nav.Link>
                </Nav.Item>
              </RLink>
              <RLink
                to="roadmap"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                delay={100}
                className={styles.navLink}
                onClick={close}
              >
                <Nav.Item>
                  <Nav.Link className={styles.navItem}>{t("roadmap")}</Nav.Link>
                </Nav.Item>
              </RLink>

              <RLink
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                delay={100}
                className={styles.navLink}
                onClick={close}
              >
                <Nav.Item>
                  <Nav.Link className={styles.navItem}>{t("contact")}</Nav.Link>
                </Nav.Item>
              </RLink>
              {/* </div> */}
            </div>
          </Navbar.Collapse>
          {!isMobile && (
            <a
              href={"https://docs.praora.com/whitepaper"}
              aria-label="Whitepaper"
              target="_blank"
              rel="noreferrer"
              className={styles.headerBtnLink}
            >
              {" "}
              <Button className={styles.headerBtn}>{t("whitepaper")}</Button>
            </a>
          )}
          <div className={styles.toggleBar} onClick={handleClick}>
            <Image src={bar} fluid alt="" />
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
