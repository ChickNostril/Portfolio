import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

//import { styles } from "../style";
import styles from "./About.module.scss"

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
				<img
					src={icon}
					alt="web-development"
					className={styles.cardIcon}
				/>

				<h3 className={styles.cardTitle}>
					{title}
				</h3>
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

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className={styles.paragraph}
			>
				I'm a Software Engineer with an interest in designing websites,
				especially things related to Front-end stacks and UIX Designer. I am
				always eager to take on new challenges and opportunities that push me
				out of my comfort zone and help me grow as a developer
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
