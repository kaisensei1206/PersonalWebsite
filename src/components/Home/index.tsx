import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import avatar from "../../image/IMG_3153.jpg";

import ContactCard from "./ContactCard";
const Home = () => {
  return (
    <div id={"Home"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.iconSection}>
          <div className={styles.iconSection_container}>
            <div className={styles.iconSection_container_avatar}>
              <img
                className={styles.iconSection_container_avatar_img}
                src={avatar}
              />
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <div className={styles.infoSection_container_header}>
              <div className={styles.iconSection_container_EngName}>Sam</div>
              <div className={styles.iconSection_container_ChiName}>
                <span>KWAN LOK, NG</span>
                <span>吳軍樂</span>
              </div>
              <div className={styles.iconSection_container_subTitle}>
                Achieve to become a Front-end Developer
              </div>
            </div>
            <div className={styles.infoSection_container_footer}>
              <hr className={styles.infoSection_container_footer_line} />
              <div className={styles.infoSection_container_footer_contact}>
                <ContactCard title={"Nationality"} text={"Hong Kong"} />
                <ContactCard title={"Location"} text={"Taipei, ROC"} />
                <ContactCard title={"Phone"} text={"0909587730"} />
                <ContactCard title={"Email "} text={"sambig12004@gmail.com"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
