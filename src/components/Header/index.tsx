import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import NavBar from "./NavBar";
const Header = () => {
  const [isNavBarDisplay, setIsNavBarDisplay] = useState(false);
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true);
  const navToggleOn = useCallback(() => setIsNavBarDisplay(true), []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  const headerToggleOn = useCallback(() => setIsHeaderDisplay(true), []);
  const headerToggleOff = useCallback(() => setIsHeaderDisplay(false), []);
  let counter;
  window.onscroll = () => {
    headerToggleOn();
    window.clearTimeout(counter);
    if (!isNavBarDisplay || window.pageYOffset !== 0) {
      counter = window.setTimeout(() => headerToggleOff(), 1000 * 5);
    }
    if (window.pageYOffset === 0) {
      headerToggleOn();
      console.log("on top");
    }
  };
  console.log(isHeaderDisplay);
  return (
    <header
      className={
        isHeaderDisplay
          ? styles.headerContainer_open
          : styles.headerContainer_close
      }
    >
      <div className={styles.header}>
        <a className={styles.header_siteTitle} href={"#Home"}>
          Home
        </a>
        <a className={styles.header_siteTitle} href={"#Intro"}>
          Intro
        </a>
        <a className={styles.header_siteTitle} href={"#Portfolio"}>
          Portfolio
        </a>
        <a className={styles.header_siteTitle} href={"#Contact"}>
          Contact
        </a>
      </div>
      <div className={styles.phoneHerder}>
        <div className={styles.header_mainnavButtom} onClick={navToggleOn}>
          <button className={styles.header_mainnavButtom_icon}>
            <div className={styles.hamburger}></div>
          </button>
        </div>
      </div>
      {isNavBarDisplay && (
        <NavBar
          setMobileNavOn={() => navToggleOn()}
          setMobileNavOff={() => navToggleOff()}
        />
      )}
    </header>
  );
};

export default Header;
