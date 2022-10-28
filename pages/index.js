import styles from "../styles/Home.module.css";
import { About, HeroSection, Navbar } from "../components";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navbar />
        <HeroSection />
        <About />
      </div>
    </div>
  );
}
