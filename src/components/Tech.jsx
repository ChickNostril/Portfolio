import React from "react";
import styles from "./Tech.module.scss"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div className={styles.flexWrapCenter}>
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "");
