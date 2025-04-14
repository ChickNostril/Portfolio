import { motion } from "framer-motion";
import styles from "./SectionWrapper.module.scss";
import { staggerContainer } from "../utils/motions";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.container}
      >
        <span className={styles.hash_span} id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
