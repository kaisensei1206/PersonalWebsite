import React, { useState, useCallback } from "react";
import styles from "./style.module.scss";

import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div id={"Skill"} className={styles.container}>
      <div className={styles.container_bg_primaryHeader}></div>
      <div className={styles.container_bg_primaryContent}></div>
      <div className={styles.container_contain}>
        <div className={styles.titleSection}>
          <div className={styles.titleSection_container}>
            <header className={styles.titleSection_container_title}>
              SKILLS
            </header>
            <div className={styles.titleSection_container_subtitle}>
              Not only but above all.
            </div>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoSection_container}>
            <SkillCard persentage={80} title={"React"} />
            <SkillCard persentage={80} title={"HTML"} />
            <SkillCard persentage={80} title={"CSS/ SASS"} />
            <SkillCard persentage={80} title={"Javascript/ Typescript"} />
            <SkillCard persentage={80} title={"JQuery"} />
            <SkillCard persentage={70} title={"SQL/ MySQL"} />
            <SkillCard persentage={60} title={"Python"} />
            <SkillCard persentage={50} title={"C++"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
