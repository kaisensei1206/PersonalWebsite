import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import NavBar from "./NavBar";
const Header = () => {
  const [isNavBarDisplay, setIsNavBarDisplay] = useState(false);
  const navToggleOn = useCallback(() => setIsNavBarDisplay(true), []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.header}>
        <header className={styles.header_siteTitle}>Sam's Website</header>
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
    </nav>
  );
};

export default Header;
