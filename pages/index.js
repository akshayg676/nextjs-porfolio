import styles from "../styles/Home.module.css";
import {
  About,
  Contact,
  HeroSection,
  ProjectList,
  Skills,
  Social,
} from "../components";
import projectData from "../public/data/projects.json";

export default function Home({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <HeroSection />
        <About />
        <ProjectList data={data} />
        <Skills />
        <Contact />
        <Social />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = projectData;
  return {
    props: {
      data,
    },
  };
}
