import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((projects, id) => {
          return <ProjectCard key={id} project={projects} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
