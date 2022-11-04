import React, { useEffect } from "react";
import { Section } from "./index";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Section tag="about" />
      {/*------------------------------------ about ------------------------------------*/}
      <section className={styles.about} data-aos="fade-up">
        <div className={styles.aboutContainer}>
          <p>
            I’m a full-stack developer who loves building user-friendly websites
            and web apps, enjoys writing documentation and loves helping people
            learn how to code.
          </p>
          <p>
            I like to define myself by the work I want to do than the work I’ve
            done. Skills can be taught, personality is inherent. I prefer to
            keep learning, continue challenging myself, and do interesting
            things that matter.
          </p>
          <a href="/resume/resume.html" target="_blank">
            <button className={styles.resumeBtn}>View Resume</button>
          </a>
        </div>
      </section>
      <div className="whitespace" />
    </div>
  );
};

export default About;
