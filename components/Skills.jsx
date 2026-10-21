export default function Skills() {
  return (
    <>
      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-kicker"> SKILLS </p>
            <h2>
              {" "}
              Tools I use to <span> ship. </span>
            </h2>
            <p>
              {" "}
              Focused on the frontend stack used to build real-world,
              maintainable applications.{" "}
            </p>
          </div>
          <div className="skills-grid">
            <article className="skill-card reveal">
              <span className="skill-number"> 01 </span>
              <h3> Frontend </h3>
              <div className="skill-tags">
                <span>React.js</span>
                <span>Next.js</span>
                <span>JavaScript ES6+</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </article>
            <article className="skill-card reveal">
              <span className="skill-number"> 02 </span>
              <h3> UI &amp; Design </h3>
              <div className="skill-tags">
                <span>Ant Design</span>
                <span>Material UI</span>
                <span>Tailwind CSS</span>
                <span>Bootstrap</span>
                <span>Responsive UI</span>
              </div>
            </article>
            <article className="skill-card reveal">
              <span className="skill-number"> 03 </span>
              <h3> State &amp; Data </h3>
              <div className="skill-tags">
                <span>Redux Toolkit</span>
                <span>RTK Query</span>
                <span>Context API</span>
                <span>REST APIs</span>
                <span>API Integration</span>
              </div>
            </article>
            <article className="skill-card reveal">
              <span className="skill-number"> 04 </span>
              <h3> Workflow </h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Vercel</span>
                <span>Debugging</span>
                <span>Code Reviews</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
