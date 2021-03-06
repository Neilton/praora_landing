import { useState, useRef, useEffect, MutableRefObject } from "react";
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
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setIsOpen(false);
  };
  const wrapperRef = useRef(null);
  // @ts-ignore
  useOutsideAlerter(wrapperRef, isOpen, close);
  return (
    <Navbar
      fixed="top"
      className={`${styles.navbar} ${styles.navbarScr} `}
      data-spy="scroll"
      data-target=".nav-wrp"
      ref={wrapperRef}
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
                  <li className={styles.navItem}>{t("resources")}</li>
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
                  <li className={styles.navItem}>{t("roadmap")}</li>
                </Nav.Item>
              </RLink>
              <RLink
                to="team"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                delay={100}
                className={styles.navLink}
                onClick={close}
              >
                <Nav.Item>
                  <li className={styles.navItem}>{t("team")}</li>
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
                  <li className={styles.navItem}>{t("contact")}</li>
                </Nav.Item>
              </RLink>
              <a
                href={"https://praora.com/ioratoken"}
                aria-label="Iora Token"
                target="_blank"
                rel="noreferrer"
                className={styles.navLink}
              >
                <Nav.Item>
                  <li className={styles.navItem}>{t("Token")}</li>
                </Nav.Item>
              </a>
              {isMobile && (<a
                href={"https://docs.praora.com/whitepaper"}
                aria-label="Whitepaper"
                target="_blank"
                rel="noreferrer"
                id="_gtm_clicks_on_whitepaper"
                className={styles.headerBtnLinkNavBar}
              >
                {" "}
                <Button>{t("whitepaper")}</Button>
              </a>
              )}
            </div>
          </Navbar.Collapse>
          {!isMobile && (
            <a
              href={"https://docs.praora.com/whitepaper"}
              aria-label="Whitepaper"
              target="_blank"
              rel="noreferrer"
              id="_gtm_clicks_on_whitepaper"
              className={styles.headerBtnLink}
            >
              {" "}
              <Button>{t("whitepaper")}</Button>
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

function useOutsideAlerter(
  ref: MutableRefObject<null>,
  isOpen: boolean,
  close: { (): void; (): void }
) {
  useEffect(() => {
    // @ts-ignore
    function handleClickOutside(event) {
      // @ts-ignore
      if (ref.current && isOpen && !ref.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close, isOpen, ref]);
}

export default NavBar;
