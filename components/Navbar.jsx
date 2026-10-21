export default function Navbar() {
  return (
    <>
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a aria-label="Hasnain.Dev home" className="brand" href="#home">
            {" "}
            Hasnain<span>.Dev</span>
          </a>
          <nav aria-label="Primary navigation" className="nav" id="navMenu">
            <a className="nav-link active" href="#home">
              {" "}
              Home{" "}
            </a>
            <a className="nav-link" href="#about">
              {" "}
              About{" "}
            </a>
            <a className="nav-link" href="#skills">
              {" "}
              Skills{" "}
            </a>
            <a className="nav-link" href="#projects">
              {" "}
              Work{" "}
            </a>
            <a className="nav-link" href="#experience">
              {" "}
              Experience{" "}
            </a>
            <a className="nav-link nav-cta" href="#contact">
              {" "}
              Let's Talk <span>↗</span>
            </a>
          </nav>
          <button
            aria-expanded="false"
            aria-label="Toggle navigation menu"
            className="hamburger"
            id="hamburger"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
