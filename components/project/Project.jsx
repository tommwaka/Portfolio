import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subtitle from "../subtitle/Subtitle";

import styles from "./Project.module.css";

const Project = ({ project }) => {
  const url = project.title.split(" ").join("-").toLowerCase();
  return (
    <div className={styles.project}>
      <div>
        <div
          className={styles.content}
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <Subtitle text={project.subtitle} />
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>
            {project.description.substr(0, 160)}...
          </p>
          {project?.role && (
            <span className={styles.role}>Role: {project.role}</span>
          )}
        </div>

        <div
          className={styles.ctaContainer}
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          {project?.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className={styles.btnLaunch}
              rel="noreferrer"
            >
              Launch Live Product<i className="fas fa-arrow-right-long"></i>
            </a>
          )}

          {project?.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              rel="noreferrer"
              target="_blank"
              className={styles.more}
            >
              View Case Study <i className="fas fa-arrow-right-long"></i>
            </a>
          )}
        </div>
      </div>
      <div
        className={styles.imageContainer}
        data-aos="zoom-in"
        data-aos-duration="2400"
      >
        <Image
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Project;
