import React, { useState, useCallback, useEffect } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
interface NavBarProps {
  setMobileNavOn: () => void;
  setMobileNavOff: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ setMobileNavOn, setMobileNavOff }) => {
  //console.log(setMobileNavOn);
  return (
    <nav className={styles.navContainer}>
      <div
        className={`${styles["navBar"]} ${
          true ? styles["navBar-open"] : styles["navBar-close"]
        }`}
      >
        <div className={styles.navBar_menuNavLayer}>
          <h1 className={styles.navBar_siteTitle}>Sam's Website</h1>
          <div className={styles.navBar_menuNav}>
            <div className={styles.navBar_menuNav_item}>
              <div className={styles.navBar_menuNav_item_title}>MENU</div>
              <div className={styles.navBar_menuNav_item_subMenuNav}>
                <div
                  className={styles.navBar_menuNav_item_subMenuNav_subItem}
                  onClick={setMobileNavOff}
                >
                  Home
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background} onClick={setMobileNavOff}></div>
      </div>
    </nav>
  );
};

export default NavBar;
