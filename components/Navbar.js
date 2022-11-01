import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.siteLogo}>
            <Link href={"/"}>
              <img className={styles.logo} src="/images/logo.png" alt="" />
            </Link>
          </div>
          <nav>
            <li>
              <a href="#project" className={styles.siteProjects}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.contact}>
                Contact
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.siteAbout}>
                skills
              </a>
            </li>
          </nav>
        </div>
      </div>
      {/*-------------------------------------- divider --------------------------------------*/}
      <div className="divider"></div>
    </div>
  );
};

export default Navbar;
