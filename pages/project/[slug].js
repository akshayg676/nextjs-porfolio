import React from "react";
import projectData from "../../public/data/projects.json";
import styles from "../../styles/ProjectDetails.module.css";
const ProjectDetails = ({ data }) => {
  return (
    <div className={styles.projectConatiner}>
      <div className={styles.headingContainter}>
        <h1 className={styles.projectHeading}>{data.title.toUpperCase()}</h1>
      </div>
      <div className={styles.button}>
        <form action={data.viewUrl} method="get" target="_blank">
          <button className={styles.projectButton} type="submit">
            View Project
          </button>
        </form>
        <form action={data.codeUrl} method="get" target="_blank">
          <button className={styles.projectButton} type="submit">
            View Code
          </button>
        </form>
      </div>
      <h3 className={styles.projectDesc}>
        <span className={styles.projectSpan}>Description:</span>
        <br />
        <p className={styles.projectPad}>{data.description}</p>
      </h3>
      <h3 className={styles.projectTools}>
        <span className={styles.projectSpan}>Tools:</span>
        <br />
        <ul className={styles.projectPad}>
          {data.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </h3>
      <img
        className={styles.projectGif}
        src={`/images/${data.slug}.gif`}
        alt=""
      />
    </div>
  );
};

export default ProjectDetails;

export function getStaticPaths() {
  const paths = projectData.map((val) => {
    return {
      params: {
        slug: val.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = projectData.find((val) => val.slug === params.slug);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
