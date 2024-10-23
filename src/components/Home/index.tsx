import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import avatar from "../../image/IMG_8699.jpg";

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
              <div className={styles.iconSection_container_EngName}>Willy</div>
              <div className={styles.iconSection_container_ChiName}>
                <span>FAN KAI WEI</span>
                <span>范凱崴</span>
              </div>
              <div className={styles.iconSection_container_subTitle}>
                Achieve to become a software engineer Developer
              </div>
            </div>
            <div className={styles.infoSection_container_footer}>
              <hr className={styles.infoSection_container_footer_line} />
              <div className={styles.infoSection_container_footer_contact}>
                <ContactCard title="Nationality" text="Vietnam" />
                <ContactCard title="Location" text="Taipei, ROC" />
                <ContactCard
                  title="Instagram"
                  text="@i.willy.want2sleep"
                  url="https://www.instagram.com/i.willywant2sleep/"
                />
                <ContactCard
                  title="LinkedIn"
                  text="Fan kai wei"
                  url="https://www.linkedin.com/in/%E5%87%B1%E5%B4%B4-%E8%8C%83-383241334/"
                />
                <ContactCard
                  title="Github"
                  text="kai wei"
                  url="https://github.com/kaisensei1206/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
