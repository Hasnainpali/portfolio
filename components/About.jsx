export default function About() {
  return (
    <>
      <section className="section about-section" id="about">
        <div className="container two-col">
          <div className="reveal">
            <p className="section-kicker"> ABOUT ME </p>
            <h2>
              {" "}
              Frontend development with a <span> product mindset. </span>
            </h2>
            <p className="lead">
              {" "}
              I build responsive and maintainable web applications with a strong
              focus on clean UI, reusable architecture, API-driven workflows and
              practical user experience.{" "}
            </p>
            <p className="body-copy">
              {" "}
              My professional experience includes production work for financial
              and insurance products, where reliability, consistency and
              data-driven interfaces matter. I also build personal products to
              strengthen my product thinking and full-stack understanding.{" "}
            </p>
            <div className="about-points">
              <div>
                <span>✓</span>
                <p>
                  <b> Reusable UI </b>
                  <small>
                    {" "}
                    Components designed for consistency and scale.{" "}
                  </small>
                </p>
              </div>
              <div>
                <span>✓</span>
                <p>
                  <b> API Integration </b>
                  <small>
                    {" "}
                    Reliable frontend-backend data flows and states.{" "}
                  </small>
                </p>
              </div>
              <div>
                <span>✓</span>
                <p>
                  <b> Responsive by default </b>
                  <small> Desktop, tablet and mobile experiences. </small>
                </p>
              </div>
            </div>
            <a className="text-link" href="#contact">
              {" "}
              Let's discuss an opportunity <span>→</span>
            </a>
          </div>
          <div className="about-panel reveal reveal-delay">
            <div className="panel-top">
              <span> Developer profile </span>
              <span className="panel-status"> AVAILABLE </span>
            </div>
            <div className="profile-row">
              <span> Role </span>
              <strong> React Frontend Developer </strong>
            </div>
            <div className="profile-row">
              <span> Experience </span>
              <strong> 2+ years </strong>
            </div>
            <div className="profile-row">
              <span> Location </span>
              <strong> Karachi, Pakistan </strong>
            </div>
            <div className="profile-row">
              <span> Work mode </span>
              <strong> Remote / Hybrid </strong>
            </div>
            <div className="profile-row">
              <span> Speciality </span>
              <strong> React + Modern UI </strong>
            </div>
            <div className="profile-code">
              <span> npm </span> run <strong> build </strong>
              <em> → ready for production </em>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
