import React from "react";
import Button from "../button/Button";
import Skill from "../skill/Skill";
import styles from "./Skills.module.css";

import { skills } from "../../data/skills";
import Subtitle from "../subtitle/Subtitle";

const Skills = () => {
	return (
		<section className={styles.skills}>
			<div className={styles.container}>
			<div className={styles.skillsContainer}>
					{skills.map((skill) => (
						<Skill key={skill.index} skill={skill} />
					))}
				</div>
			<div
					className={styles.content}
					data-aos="fade-left"
					data-aos-duration="1800"
				>
					<Subtitle text="My Skills" />
					<h2 className={styles.title}>Why Hire Me For Your Next Project?</h2>
					<p className={styles.description}>
					   As a UX Designer with 3+ of professional experience, I specialize in crafting seamless digital experiences that prioritize user need
					    and enhance usability. With a background in user research, interaction design, and prototyping, I excel at translating complex
						 requirements into intuitive interfaces that resonate with diverse audiences. Leveraging my expertise in user-centered design
						 principles and empathy-driven approach, I collaborate closely with cross-functional teams to conceptualize and iterate on
						  innovative solutions. 
						
					</p>
					<Button
						target="_blank"
						url="https://drive.google.com/file/d/13HDvtdO8TiY1kQB5BQ1CVofdpBeOg_rm/view?usp=drivesdk"						
						title="Download CV"
						download
					/>
				</div>
				
				
			</div>
		</section>
	);
};

export default Skills;
