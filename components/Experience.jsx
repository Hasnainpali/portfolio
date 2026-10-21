export default function Experience() {
  return (
    <>
      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-kicker"> EXPERIENCE </p>
            <h2>
              {" "}
              Professional <span> journey. </span>
            </h2>
            <p>
              {" "}
              Hands-on frontend experience across production applications and
              enterprise workflows.{" "}
            </p>
          </div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-date"> JAN 2024 — PRESENT </div>
              <div className="timeline-content">
                <div className="role-head">
                  <div>
                    <h3> React Developer </h3>
                    <p> P3 Financial Group </p>
                  </div>
                  <span> FULL-TIME </span>
                </div>
                <ul>
                  <li>
                    {" "}
                    Develop scalable and reusable UI components using
                    React.js.{" "}
                  </li>
                  <li>
                    {" "}
                    Integrate REST APIs for reliable frontend-backend
                    communication and data flow.{" "}
                  </li>
                  <li>
                    {" "}
                    Optimize application performance and resolve UI issues to
                    improve usability.{" "}
                  </li>
                  <li>
                    {" "}
                    Collaborate with backend teams to troubleshoot API and data
                    flow issues.{" "}
                  </li>
                </ul>
                <div className="tags">
                  <em>React</em>
                  <em>JavaScript</em>
                  <em>REST APIs</em>
                  <em>Ant Design</em>
                </div>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-date"> SEP 2023 — DEC 2023 </div>
              <div className="timeline-content">
                <div className="role-head">
                  <div>
                    <h3> React Developer Intern </h3>
                    <p> P3 Financial Group </p>
                  </div>
                  <span> INTERNSHIP </span>
                </div>
                <ul>
                  <li>
                    {" "}
                    Built responsive interfaces using React.js, Material UI and
                    Bootstrap.{" "}
                  </li>
                  <li>
                    {" "}
                    Assisted with API integrations and frontend performance
                    improvements.{" "}
                  </li>
                  <li>
                    {" "}
                    Performed debugging, testing and cross-browser compatibility
                    fixes.{" "}
                  </li>
                  <li>
                    {" "}
                    Participated in code reviews and followed frontend
                    development best practices.{" "}
                  </li>
                </ul>
                <div className="tags">
                  <em>React</em>
                  <em>Material UI</em>
                  <em>Bootstrap</em>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
