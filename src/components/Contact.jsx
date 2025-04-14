import React from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motions";

import styles from "./Contact.module.scss";
import { profileImage } from "../assets";
import TreeCanvas from "./canvas/Tree";

const Contact = () => {
  return (
    <div className={styles.container}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={styles.infoCard}
      >
        <p className={styles.title}>Get in touch</p>
        <h3 className={styles.header}>Contact.</h3>

        <div className={styles.infoList}>
          <div>
            <img
              src={profileImage}
              alt="profile"
              className={styles.profileImage}
            />
          </div>
          <div>
            <strong>Email:</strong> strik241@gmail.com
          </div>
          <div>
            <strong>Phone:</strong> 010-7127-1089
          </div>
          <div>
            <strong>Address:</strong> 경기도 성남시 수정구 대왕판교로 1210
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={styles.canvasWrapper}
      >
        {/* <EarthCanvas /> */}
        <TreeCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
