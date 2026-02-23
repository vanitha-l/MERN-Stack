import { useState } from "react";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <section id="home" style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ color: "#00adb5", fontSize: "40px" }}>
        Vanitha
      </h1>

      <h3>Frontend Developer</h3>

      {showIntro && (
        <p>
          I build responsive and interactive web applications using React.
        </p>
      )}

      <button onClick={() => setShowIntro(!showIntro)}>
        {showIntro ? "Hide Intro" : "Show Intro"}
      </button>
    </section>
  );
}

export default Home;