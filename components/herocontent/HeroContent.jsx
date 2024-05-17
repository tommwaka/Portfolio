import React from "react";

import Button from "../button/Button";
import Subtitle from "../subtitle/Subtitle";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	return (
		<div className={styles.content}>
			<Subtitle text="Intro" dataAos="fade-right" dataAosDuration="1700" />
			<h2
				className={styles.title}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				<span className={styles.greeting}>Hello</span> <br /> I&#39;m Thomas
				Mwaka
			</h2>
			
			<p
				className={styles.description}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				Crafting Experiences, Shaping Perspectives: Explore My UX World! Where Innovation Meets Intuition 😎


			</p>
			<Button
				title="Let's Talk"
				url="/contact"
				dataAos="fade-up"
				dataAosDuration="2000"
			/>
		</div>
	);
};

export default HeroContent;
