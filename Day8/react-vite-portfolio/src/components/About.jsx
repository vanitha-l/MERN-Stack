import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>

      <h4>Education</h4>
      <p>Bachelor's Degree in Computer Science</p>

      <h4>Skills</h4>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

export default About;