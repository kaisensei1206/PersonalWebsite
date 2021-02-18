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
              <EducationCard
                period={"2017 - Present"}
                title={"National Taipei University of Technology"}
                position={
                  "Bachelor of Computer Science and Information Engineering"
                }
                location={"Taipei, ROC"}
                info={""}
              />
              <EducationCard
                period={"2011 - 2017"}
                title={"Lok Sin Tong Leung Chik Wai Memorial School"}
                position={"HKDSE 2017"}
                location={"Hong Kong"}
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
