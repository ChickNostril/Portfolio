import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { browse } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

import styles from "./Projects.module.scss";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={styles.projectCard}
      >
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt="project_image"
            className={styles.projectImage}
          />

          <div className={styles.imageOverlay}>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={styles.sourceCodeButton}
            >
              <img
                src={browse}
                alt="Preview"
                className={styles.sourceCodeIcon}
              />
            </div>
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{name}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>

        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            // <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            // 		#{tag.name}
            // </p>
            <p
              key={`${name}-${tag.name}`}
              className={`${styles.tag} ${styles[tag.color]}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className={styles.introWrapper}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.introText}
        >
          저의 포트폴리오 프로젝트들은 다양한 기술과 접근 방식을 통해 실제
          문제를 해결한 사례들을 보여줍니다. <br />각 프로젝트는 기술적인 도전과
          창의적인 해결책을 제시하며, 실습을 통해 얻은 경험을 바탕으로 문제 해결
          능력과 기술적 성장을 확인하실 수 있습니다.
        </motion.p>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
