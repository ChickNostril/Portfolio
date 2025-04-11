import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.scss";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.decorator}>
					<div className={styles.circle} />
					<div className={styles.violetLine} />
				</div>
				<div>
					<h1 className={styles.heroHeadText}>
						<span className={styles.purpleText}>신정엽</span>
					</h1>
					<p className={styles.heroSubText}>
						Junior Frontend Developer
						<br className={styles.break} />
						interested in designing websites,
						<br className={styles.break} />
						especially things related to F.E stacks and UIX.
					</p>
				</div>
			</div>
			<ComputersCanvas />

			<div className={styles.scrollContainer}>
				<a href="#about">
					<div className={styles.scrollBox}>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className={styles.scrollDot}
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
