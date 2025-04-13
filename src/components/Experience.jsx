import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import styles from "./Experience.module.scss";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motions";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        color: "#000",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #ffffff",
      }}
      date={experience.date}
      dateClassName={styles.timelineDate}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className={styles.iconWrapper}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={styles.iconImage}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.company}>{experience.company_name}</p>
      </div>

      <ul className={styles.pointsList}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.point}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className={styles.timelineWrapper}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
