import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { backend } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

import styles from "./Projects.module.scss"

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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

					<div 
						// className="card-img_hover"
						className={styles.imageOverlay}
					>
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							// className="black-gradient"
							className={styles.sourceCodeButton}
						>
							<img
								src={backend}
								alt="Preview"
								className={styles.sourceCodeIcon}
							/>
						</div>
					</div>
				</div>

				<div 
					className={styles.projectInfo}>
					<h3 className={styles.projectTitle}>{name}</h3>
					<p className={styles.projectDescription}>{description}</p>
				</div>

				<div 
					className={styles.tagContainer}>
					{tags.map((tag) => (
						// <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
						// 		#{tag.name}
						// </p>
						<p key={`${name}-${tag.name}`} className={`${styles.tag} ${styles[tag.color]}`}>
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
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className={styles.introWrapper}>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className={styles.introText}
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
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
