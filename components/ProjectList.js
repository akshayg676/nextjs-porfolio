import Link from "next/link";
import React from "react";
import { Section } from "./index";
import styles from "../styles/ProjectList.module.css";
const ProjectList = ({ data }) => {
  return (
    <div>
      <Section tag="selected projects" />
      {data.map((val) => (
        <section key={val.id} className={styles.project}>
          <div className={styles.projectContainer}>
            <Link className={styles.project_link} href={`/project/${val.slug}`}>
              / {val.title}
            </Link>
            <img
              src={`/images/${val.slug}.gif`}
              alt="img"
              className={styles.project_image}
            />
            <div className={styles.marquee}>
              <div className={styles.marquee__inner}>
                <span>{val.title}</span>
                <span>{val.title}</span>
                <span>{val.title}</span>
                <span>{val.title}</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="whitespace" />
    </div>
  );
};

export default ProjectList;
