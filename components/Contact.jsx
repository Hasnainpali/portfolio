export default function Contact() {
  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="container contact-card reveal">
          <div className="contact-copy">
            <p className="section-kicker"> 06 — CONTACT </p>
            <h2> Have a role or project in mind? </h2>
            <p>
              {" "}
              I'm open to React frontend roles, remote opportunities and
              meaningful product work.{" "}
            </p>
            <div className="contact-links">
              <a href="mailto:hasnainpali321@gmail.com">
                <span> Email </span>
                <strong> hasnainpali321@gmail.com </strong> ↗{" "}
              </a>
              <a href="tel:+923332830600">
                <span> Phone </span>
                <strong> +92 333 2830600 </strong> ↗{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/hasnain-frontend-developer/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span> LinkedIn </span>
                <strong> Connect with me </strong> ↗{" "}
              </a>
            </div>
          </div>
          <div className="contact-visual">
            <div className="availability large">
              <span className="status-dot"></span> Available for opportunities{" "}
            </div>
            <div className="contact-code">
              <span> git checkout </span>
              <b> your-next-developer </b>
              <br />
              <span> npm run </span>
              <b> build-something-great </b>
              <br />
              <em> ✓ Ready to collaborate </em>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
