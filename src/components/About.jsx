import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

//import { styles } from "../style";
import styles from "./About.module.scss";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className={styles.tilt}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={styles.cardOuter}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 300,
        }}
        className={styles.cardInner}
      >
        <img src={icon} alt="web-development" className={styles.cardIcon} />

        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className={styles.paragraph}>
        웹 프론트엔드 개발을 배우고, 구현하며 성장하고 있습니다.
        <br />
        화면에 보이는 모든 요소가 사용자에게 의미 있게 다가가도록 고민하는 것을
        좋아합니다. <br />
        작은 인터랙션 하나에도 사용자 경험이 달라질 수 있다는 점에서
        프론트엔드에 매력을 느끼고 있습니다. <br />
        스스로 기획하고 개발해보는프로젝트를 통해, 기술뿐만 아니라 문제 해결
        능력도 함께 키워가고 있습니다.
      </motion.p>

      <div className={styles.serviceWrapper}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
