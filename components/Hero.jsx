"use client";

import { useEffect, useState } from "react";

const HERO_ROLES = [
  "React Frontend Developer",
  "Responsive UI Specialist",
  "REST API Integration",
  "Reusable React Components",
];

export default function Hero() {

  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = HERO_ROLES[roleIndex];
    const isComplete = typedText === currentRole;
    const isEmpty = typedText.length === 0;
    const delay = isComplete ? 1300 : deleting ? 32 : 68;

    const timeout = window.setTimeout(() => {
      if (!deleting && !isComplete) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else if (deleting && !isEmpty) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      } else if (isComplete) {
        setDeleting(true);
      } else if (isEmpty && deleting) {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % HERO_ROLES.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [typedText, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <div className="availability">
            <span className="status-dot" />
            Open to frontend opportunities
          </div>

          <p className="eyebrow">Frontend Developer · Karachi, Pakistan</p>

          <h1>
            I turn complex ideas into{" "}
            <span className="gradient-text">
              clear digital experiences.
            </span>
          </h1>

          <p className="hero-description">
            I'm Hasnain Iqbal — a React Frontend Developer focused on
            scalable interfaces, REST API integration, reusable
            components and responsive user experiences.
          </p>

          <div className="typed-line" aria-live="polite">
            <span>{typedText}</span>
            <span className="cursor">|</span>
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View My Work <span>↗</span>
            </a>

            <a
              className="btn secondary"
              href="/download/Hasnain%20Iqbal%20React%20Developer%20Resume.pdf"
              download="Hasnain-Iqbal-React-Developer-CV.pdf"
            >
              Download CV <span>↓</span>
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/Hasnainpali"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/hasnain-frontend-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:hasnainpali321@gmail.com">Email</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero-stat">
              <strong>10+</strong>
              <span>Production Features</span>
            </div>

            <div className="hero-stat">
              <strong>Remote</strong>
              <span>Open to Work</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual reveal reveal-delay">
          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>

              <span>hasnain.dev</span>
              <b>●</b>
            </div>

            <div
              className="code-content"
              aria-label="Developer profile code"
            >
              <div>
                <span className="code-purple">const </span>
                <span className="code-blue">developer</span> = {"{"}
              </div>

              <div className="indent-2">
                <span className="code-blue">name</span>:{" "}
                <span className="code-green">"Hasnain Iqbal"</span>,
              </div>

              <div className="indent-2">
                <span className="code-blue">role</span>:{" "}
                <span className="code-green">"React Developer"</span>,
              </div>

              <div className="indent-2">
                <span className="code-blue">focus</span>:{" "}
                <span className="code-green">"Frontend"</span>,
              </div>

              <div className="indent-2">
                <span className="code-blue">stack</span>: [
                <span className="code-green">"React"</span>,{" "}
                <span className="code-green">"Next.js"</span>],
              </div>

              <div className="indent-2">
                <span className="code-blue">available</span>:{" "}
                <span className="code-orange">true</span>
              </div>

              <div>{"};"}</div>

              <div className="code-cursor">_</div>
            </div>

            <div className="floating-tech tech-react">React.js</div>
            <div className="floating-tech tech-js">JavaScript</div>
            <div className="floating-tech tech-ui">API + UI</div>
          </div>

          <div className="hero-mini-card">
            <span className="mini-icon">↗</span>

            <div>
              <small>Currently building</small>
              <strong>Production-grade interfaces</strong>
            </div>

            <span className="live-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}