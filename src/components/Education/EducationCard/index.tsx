import React, { useState, useEffect } from "react";
import { useIntersection } from "react-use";
import styles from "./style.module.scss";

interface EducationCardProps {
  period: string;
  title: string;
  position: string;
  location: string;
  info: string;
}
const EducationCard: React.FC<EducationCardProps> = ({
  period,
  title,
  position,
  location,
  info,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_point}></div>
      <div className={styles.container_item_title}>
        <p className={styles.container_item_title_period}>{period}</p>
        <p className={styles.container_item_title_title}>{title}</p>
        <p className={styles.container_item_title_position}>{position}</p>
        <p className={styles.container_item_title_location}>{location}</p>
      </div>
      <div className={styles.container_info}>
        <p className={styles.container_info_text}>
          {info.split("\n").map((i) => {
            return <p>{i}</p>;
          })}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
