import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div id={"Education"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              EDUCATION
            </header>
            <div className={styles.titleSection_container_subtitle}>
              My grown up time.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <div className={styles.infoSection_container_timeLine}>
              <div className={styles.infoSection_container_timeLine_end}></div>
              <EducationCard
                period='2021 - Present'
                title='National central university'
                website='https://www.ncu.edu.tw/tw/'
                position='Bachelor Information management'
                location='Taoyuan, ROC'
                info={
                  "• back-end development of final project using mongodb, APIs integration techniques both JavaScript & TypeScript.\n• Project leders& Project Designer , Back-end team members  ."
                }
              />
              <EducationCard
                period='2011 - 2021'
                title='Taipei School in Ho Chi Minh City'
                website='https://www.tshcmc.edu.vn/'
                position='Student'
                location='Vietnam'
                info={
                  "• Chinese\n• English\n• Mathematics\n• Liberal Studies\n• Information and Communication Technology\n• Chemistry"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
