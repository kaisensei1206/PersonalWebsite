import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div id="Contact" className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              CONTACT
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Call me Kaisensei.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <ContactCard title="Location" text="Taipei, ROC" />
            <ContactCard
              title="LinkedIn"
              text="Fan Kai Wei"
              url="https://www.linkedin.com/in/%E5%87%B1%E5%B4%B4-%E8%8C%83-383241334/"
            />
            <ContactCard
              title="Github"
              text="https://github.com/kaisensei1206/"
              url="https://github.com/kaisensei1206/"
            />
          </div>
          <hr className={styles.infoSection_line} />
          <div className={styles.infoSection_footer}>
            <div className={styles.infoSection_footer_EngName}>Willy</div>
            <div className={styles.infoSection_footer_ChiName}>
              <span>KAI WEI, FAN 范凱崴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
