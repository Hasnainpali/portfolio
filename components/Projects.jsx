export default function Projects() {
  return (
    <>
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-kicker">Selected Work</span>
            <h2>
              Projects that show{" "}
              <span className="gradient-text">real capability.</span>
            </h2>
            <p>
              {" "}
              Personal builds plus professional product experience — presented
              honestly and clearly.{" "}
            </p>
          </div>
          <div className="projects-grid">

            {/* <article className="project-card featured reveal">
              <div className="project-image">
                <img
                  src="/images/Mern.jpg"
                  alt="ShopHisaab business management and point-of-sale platform"
                  loading="lazy"
                />
                <span className="project-label">PERSONAL SAAS · FEATURED</span>
                <span className="project-image-index">01 / FEATURED</span>
              </div>
              <div className="project-body">
                <p className="project-eyebrow">PRODUCT · FULL-STACK</p>
                <div className="project-title">
                  <div>
                    <h3>ShopHisaab</h3>
                    <p>Retail operations, made simpler.</p>
                  </div>
                  <span>01</span>
                </div>
                <p>
                  A business management platform designed to bring sales,
                  purchases, inventory, customers, suppliers, khata and reports
                  into one workflow for shop owners.
                </p>
                <div className="tags">
                  <em>Next.js</em><em>React</em><em>Node.js</em>
                  <em>MongoDB</em><em>RTK Query</em>
                </div>
                <div className="project-actions">
                  <a href="https://shophisaab-client-qa.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Explore QA build ↗
                  </a>
                  <a href="https://github.com/Hasnainpali/shophisaab_client" target="_blank" rel="noopener noreferrer">
                    Source code ↗
                  </a>
                </div>
              </div>
            </article> */}

            <article className="project-card reveal">
              <div className="project-image">
                <img
                  alt="Soneri Business Now banking application"
                  loading="lazy"
                  src="/images/Soneri.png"
                />
                <span className="project-label"> PROFESSIONAL • FINTECH </span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <div>
                    <h3> Soneri Business Now </h3>
                    <p> Enterprise Banking Platform </p>
                  </div>
                  <span> 02 </span>
                </div>
                <p>
                  {" "}
                  Worked on frontend workflows, reusable React components,
                  API-driven screens and responsive interfaces for a banking
                  product.{" "}
                </p>
                <div className="tags">
                  <em>React</em>
                  <em>Ant Design</em>
                  <em>Tailwind</em>
                  <em>Redux Toolkit</em>
                </div>
                <a
                  className="project-link"
                  href="https://businessnow-qa.cloudasset.com/login"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  View Product ↗{" "}
                </a>
              </div>
            </article>
            <article className="project-card reveal">
              <div className="project-image">
                <img
                  alt="Jubilee Life insurance dashboard"
                  loading="lazy"
                  src="/images/Jubliee.jpg"
                />
                <span className="project-label"> PROFESSIONAL • INSURANCE </span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <div>
                    <h3> Jubilee Life Insurance </h3>
                    <p> Insurance Dashboard </p>
                  </div>
                  <span> 03 </span>
                </div>
                <p>
                  {" "}
                  Contributed to responsive React interfaces, reusable UI
                  components and REST API integrations for insurance
                  workflows.{" "}
                </p>
                <div className="tags">
                  <em>React</em>
                  <em>Material UI</em>
                  <em>Bootstrap</em>
                  <em>REST APIs</em>
                </div>
                <a
                  className="project-link"
                  href="https://insurance.jubileegeneral.com/login"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  View Product ↗{" "}
                </a>
              </div>
            </article>
            <article className="project-card reveal">
              <div className="project-image">
                <img
                  alt="PF Journeys travel platform"
                  loading="lazy"
                  src="/images/PF Jourenys.png"
                />
                <span className="project-label"> PERSONAL PROJECT </span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <div>
                    <h3> PF Journeys </h3>
                    <p> Travel &amp; Tourism Platform </p>
                  </div>
                  <span> 04 </span>
                </div>
                <p>
                  {" "}
                  A modern travel experience featuring destination content, tour
                  packages, galleries and inquiry-focused UI.{" "}
                </p>
                <div className="tags">
                  <em>React</em>
                  <em>JavaScript</em>
                  <em>API</em>
                  <em>Responsive UI</em>
                </div>
                <div className="project-actions">
                  <a
                    href="https://pf-journeys.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Live Website ↗{" "}
                  </a>
                  <a
                    href="https://github.com/Hasnainpali/pf_journeys"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    GitHub ↗{" "}
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card reveal">
              <div className="project-image">
                <img
                  alt="Shuttering Patti construction website"
                  loading="lazy"
                  src="/images/Shuttering.png"
                />
                <span className="project-label"> PERSONAL PROJECT </span>
              </div>
              <div className="project-body">
                <div className="project-title">
                  <div>
                    <h3> Shuttering Patti </h3>
                    <p> Construction Business Website </p>
                  </div>
                  <span> 05 </span>
                </div>
                <p>
                  {" "}
                  A product-focused business website with responsive sections,
                  product presentation, gallery and inquiry experience.{" "}
                </p>
                <div className="tags">
                  <em>HTML</em>
                  <em>Tailwind</em>
                  <em>JavaScript</em>
                  <em>Responsive UI</em>
                </div>
                <div className="project-actions">
                  <a
                    href="https://shuttering-patti.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Live Website ↗{" "}
                  </a>
                  <a
                    href="https://github.com/Hasnainpali/Shuttering_Patti"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    GitHub ↗{" "}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
