import React from "react";
import styles from "../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div>
      {/* -------------------------------------- header -------------------------------------- */}
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>
            Akshay G<br />
            Front End
            <br />
            &nbsp;Developer
          </h1>
        </div>
      </div>

      {/* -------------------------------------- hero-image -------------------------------------- */}
      <div className={styles.heroImage}>
        <div className={styles.heroImageContainer}>
          <img src="/images/stripy-relax.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
