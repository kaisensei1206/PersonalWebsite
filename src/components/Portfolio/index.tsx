import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import ProtfolioCard from "./PortfolioCard";
import demo1 from "../../image/1.png";
import demo2 from "../../image/2.png";
import demo3 from "../../image/3.png";
import demo5 from "../../image/4.png";
import demo6 from "../../image/5.png";
import demo7 from "../../image/6.png";
import demo4 from "../../image/discord-logo.jpg";
import demo8 from "../../image/7.png";

const Portfolio = () => {
  return (
    <div id={"Portfolio"} className={styles.container}>
      <div className={styles.container_bg_secondHeader}></div>
      <div className={styles.container_bg_secondContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              PORTFOLIO
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Here it gets interesting.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <ProtfolioCard
              imageUrl={demo5}
              websiteUrl={"https://messager.sawajiri-ng.net/"}
              githubUrl={"https://github.com/NG-KWAN-LOK/IS_P2P_Chat"}
              title={"Messager"}
              subtitle={
                "Real Time Secured Messaging Web Application using React, Socket.io and cryptosystem."
              }
            />

            <ProtfolioCard
              imageUrl={demo4}
              websiteUrl={
                "https://discord.com/api/oauth2/authorize?client_id=801768804148314113&permissions=3287040&scope=bot"
              }
              githubUrl={"https://github.com/NG-KWAN-LOK/Discord_SawaBot"}
              title={"Discord_SawaBot"}
              subtitle={
                "A full function discord music bot using Node.js. This app deploying on Heroku."
              }
            />
            <ProtfolioCard
              imageUrl={demo6}
              websiteUrl={"https://www.sawajiri-ng.net/"}
              githubUrl={"https://github.com/NG-KWAN-LOK/PersonalWebsite"}
              title={"kaisensei Personal Website"}
              subtitle={
                "This wonderful website and my first personal website using React."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
