import styles from "../styles/Home.module.css";
import { About, HeroSection, Navbar, ProjectList } from "../components";
import projectData from "../public/data/projects.json";
export default function Home({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar />
        <HeroSection />
        <About />
        <ProjectList data={data} />
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
