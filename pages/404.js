import Link from "next/link";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div>
      <p className={styles.title}>
        HTTP: <span>404</span>
      </p>
      <code className={styles.code}>
        <span>this_page</span>.<em>not_found</em> = true;
      </code>
      <code className={styles.code}>
        <span>if</span> (<b>you_spelt_it_wrong</b>) {"{"}
        <span>try_again()</span>;{"}"}
      </code>
      <code className={styles.code}>
        <span>
          else if (<b>we_screwed_up</b>)
        </span>{" "}
        {"{"}
        <em>alert</em>(<i>"We're really sorry about that."</i>);{" "}
        <span>window</span>.<em>location</em> = home;{"}"}
      </code>
      <center>
        <Link href="/" className={styles.redirect}>
          HOME
        </Link>
      </center>
    </div>
  );
};

export default ErrorPage;
